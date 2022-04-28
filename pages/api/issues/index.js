import { Octokit } from 'octokit'
import fs from 'fs'
import path from 'path'

export default async function handler(req, res){
    const {send} = req.query;
    const octokit = new Octokit();
    const q = "is:open is:issue label:good-first-issue";

    const response = await octokit.request('GET /search/issues', {q})
    const results = response.data.items.map((items) => ({
        name: items.title,
        author: items.user.login,
        labels: items.labels.map(label => label.name),
        url: items.html_url,
    }))
    const random = Math.floor(Math.random() * results.length + 1)

    if (send){
        const files = fs.readdirSync(path.resolve("data"))
        const user = files.map((file) => ({
            ...JSON.parse(fs.readFileSync(path.resolve("data", file), "utf8")),
            file
        }))
    }

    res.status(200).json(results[random])
}

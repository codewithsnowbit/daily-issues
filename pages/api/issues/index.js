// api/issues

export default function handler(req, res){
    const issue = {
        name: "Issue test",
        author: "codewithsnowbit",
        labels: ["bug", "enahancement"],
        url: "https://github.com/codewithsnowbit"
    }
    res.status(200).json(issue)
}

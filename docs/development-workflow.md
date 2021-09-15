# Development Workflow

- Ensure you understand exactly what is required to consider the issue you’re working on “done”.
- Locally, ensure `main` is up-to-date and then create a new branch off it beginning with the issue number and then keywords related to the issue separated by dashes, e.g. `git checkout -b 402-search`.
- Make commits locally using [semantic commit messages](https://seesparkbox.com/foundry/semantic_commit_messages).
- If appropriate, make any corresponding updates to the documentation in the README.
- Push your commits to the same branch on the origin remote, e.g. `git push origin 402-search`.
- Ensure that your code addresses everything required to consider the issue “done”, readable, understandable, accurate and efficient, and does not break existing functionality.
- Create a pull request from your branch against `main`. Include “Closes #[issue number]” in the “Context” section of the description to [link the pull request to the issue](https://help.github.com/articles/closing-issues-using-keywords/).
- Request a review from a team member using GitHub’s “Reviewers” column.

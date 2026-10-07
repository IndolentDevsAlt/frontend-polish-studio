<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Frontend prototype architecture
- Keep all Harley content routes inside the root HarleyShell so account navigation retains the same sidebar and utility header.
- Keep prototype interactions in component state only and do not call authentication, integration or backend APIs; this project is a frontend-only design example.
- Define all presentation colors, effects and layout styling in src/styles.css and use shared Button variants for actions to preserve a consistent theme.

#!/bin/bash
# Git sync helper - Auto commit and push workspace changes

cd /data/.openclaw/workspace

# Check if there are changes
if [[ -n $(git status -s) ]]; then
    # Add all changes
    git add .
    
    # Commit with message
    COMMIT_MSG="${1:-Auto-commit: workspace update $(date +'%Y-%m-%d %H:%M')}"
    git commit -m "$COMMIT_MSG"
    
    # Push to origin
    git push origin main
    
    echo "✅ Changes synced to GitHub"
else
    echo "ℹ️  No changes to commit"
fi

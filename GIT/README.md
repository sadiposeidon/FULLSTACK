** GIT **
git@github.com:sadiposeidon/FULLSTACK.git
git clone https://github.com/sadiposeidon/FULLSTACK.git
git remote set-url origin git@github.com:sadiposeidon/FULLSTACK.git remote -v

git config --global user.name "sadiposeidon"
git config --global user.email "sadiposeidon@gmail.com"
git config --global --list

git add .                # Butun deyisiklikleri staging-ə elave e
git commit -m "mesaj"    # Deyisiklikleri commit edir
git push origin main     # Main branch-i remote-a gonderir
git push                 # Aktiv branch-i default remote-a gonder

git status
git pull

git fetch

git show <commit-id>

git log --stat

git log HEAD..origin/main --oneline
git log origin/main --oneline

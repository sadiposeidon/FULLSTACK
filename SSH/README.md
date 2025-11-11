** SSH **
```
# Yeni SSH acari yaradir
ssh-keygen -t ed25519 -C "sadiposeidon@gmail.com"

ls -al ~/.ssh                   # SSH fayllarini gosterir
eval "$(ssh-agent -s)"          # SSH agenti ishe salir
ssh-add ~/.ssh/id_ed25519       # Private key-i agent-ə elave edir
cat ~/.ssh/id_ed25519.pub       # Private key-i gosterir (Sexsi)
cat ~/.ssh/id_ed25519.pub       # Public key-i gosterir (GitHub-a>
ssh -T git@github.com           # GitHub ile baglantini test edir
```

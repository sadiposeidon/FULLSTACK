** LINUX **
mkdir	# Qovluq yaradir
cd 	# Qovluqa daxil olur
touch	# Yeni fayl yaradir
ls 	# Qovluqdaki fayllari gosterir
rm 	# Fayli silir
mv 	# Fayli veya qovlugu kocurur/adini deyisdir

pwd                  	# Cari qovlugun yolunu gosterir
cd ..                	# Bir yuxari qovluqa kecir
cd ~                 	# Ev qovluguna kecir
ls -l                	# Fayllari uzun formatda gosterir (icazeler, sahiblər)
ls -a                	# Gizli fayllari da gosterir
cp fayl1 fayl2       	# Fayli kopyalayir
cp -r qovluq1 qovluq2 	# Qovlugu ve icindekileri kopyalayir
mv fayl1 yeni_yer    	# Fayli/kataloqu kocurur veya adini deyisir
rm fayl               	# Fayli silir
rm -r qovluq          	# Qovlugu ve icindekileri silir
mkdir qovluq           	# Yeni qovluq yaradir
rmdir qovluq           	# Bos qovlugu silir
touch fayl             	# Yeni bos fayl yaradir
cat fayl               	# Faylin icini gosterir
nano fayl              	# Fayli terminalde redakte edir
head fayl              	# Faylin ilk 10 setrini gosterir
tail fayl              	# Faylin son 10 setrini gosterir
tail -f fayl           	# Fayla realtime baxmaq (log fayllari ucun)
chmod 755 fayl         	# Faylin icazelerini deyisir
chown user:group fayl  	# Faylin sahibini deyisir
find . -name "fayl*"   	# Cari qovluq ve icindeki qovluqlarda fayl axtarir
grep "text" fayl       	# Faylda text axtarir
df -h                  	# Disk bolmelerini ve bos yerleri gosterir
du -sh qovluq           # Qovlugun olcusunu gosterir
ps aux                 	# Cari prosesleri gosterir
top                    	# Real-time proses ve resurs istatistikasini gosterir
kill PID               	# Prosesin PID-ni dayandirir
wget url               	# Internetden fayl yukleyir
curl url               	# Internetden fayl/melumat alir
ssh user@host          	# Uzaq servere baglanir
scp fayl user@host:/yol	# Fayli uzaq servere kopyalayir
history                	# Əvvəlki komandaları gosterir
clear                  	# Terminali temizleyir


** SSH **
# Yeni SSH acari yaradir
ssh-keygen -t ed25519 -C "sadiposeidon@gmail.com"

ls -al ~/.ssh			    # SSH fayllarini gosterir
eval "$(ssh-agent -s)"		# SSH agenti ishe salir
ssh-add ~/.ssh/id_ed25519	# Private key-i agent-ə elave edir
cat ~/.ssh/id_ed25519.pub   # Private key-i gosterir (Sexsi)
cat ~/.ssh/id_ed25519.pub	# Public key-i gosterir (GitHub-a yapistirmaq ucun)
ssh -T git@github.com		# GitHub ile baglantini test edir


** GIT **
git clone https://github.com/username/repo.git	# Repository-i kompüterə kopyalayir
git config --global user.name "ad"             	# Git user adini set edir
git config --global user.email "email"         	# Git user emailini set edir
git config --global --list                      # Konfiqurasiyani gosterir

git add .                                      	# Butun deyisiklikleri staging-ə elave edir
git commit -m "mesaj"                          	# Deyisiklikleri commit edir
git push origin main                            # Main branch-i remote-a gonderir
git push                                        # Aktiv branch-i default remote-a gonderir


** NVM **
# NODE VERSION MANAGER
nvm use
nvm install


** NPM **
# NODE PACKAGE MANAGER
npm install	 	# lokal
npm install -g	 	# qlobal
npm install --save-dev

** NPX **
# Paketləri qlobal quraşdırmadan bir dəfəlik çalışdırmaq
npx <paket adi>


** NODE **
node <fayl.js>


** NODEMON **
nodemon <fayl.js>


** PM2 **
pm2 start <fayl.js> --name <app_name>
pm2 restart <app_name>    # mv funksiyasına bənzər, app-in yeni versiyasını “dəyişmək”
pm2 stop <app_name>


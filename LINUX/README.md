** LINUX **
mkdir   # Qovluq yaradir
cd      # Qovluqa daxil olur
touch   # Yeni fayl yaradir
ls      # Qovluqdaki fayllari gosterir
rm      # Fayli silir
mv      # Fayli veya qovlugu kocurur/adini deyisdir

pwd                     # Cari qovlugun yolunu gosterir
cd ..                   # Bir yuxari qovluqa kecir
cd ~                    # Ev qovluguna kecir
ls -l                   # Fayllari uzun formatda gosterir (icazel>
ls -a                   # Gizli fayllari da gosterir
cp fayl1 fayl2          # Fayli kopyalayir
cp -r qovluq1 qovluq2   # Qovlugu ve icindekileri kopyalayir
mv fayl1 yeni_yer       # Fayli/kataloqu kocurur veya adini deyis>
rm fayl                 # Fayli silir
rm -r qovluq            # Qovlugu ve icindekileri silir
mkdir qovluq            # Yeni qovluq yaradir
mv *.css qovluq         # Mövcud CSS fayllarını qovluğuna köçür
rmdir qovluq            # Bos qovlugu silir
touch fayl              # Yeni bos fayl yaradir
cat fayl                # Faylin icini gosterir
nano fayl               # Fayli terminalde redakte edir
head fayl               # Faylin ilk 10 setrini gosterir
tail fayl               # Faylin son 10 setrini gosterir
tail -f fayl            # Fayla realtime baxmaq (log fayllari ucu>
chmod 755 fayl          # Faylin icazelerini deyisir
chown user:group fayl   # Faylin sahibini deyisir
find . -name "fayl*"    # Cari qovluq ve icindeki qovluqlarda fay>
df -h                   # Disk bolmelerini ve bos yerleri gosterir
du -sh qovluq           # Qovlugun olcusunu gosterir
ps aux                  # Cari prosesleri gosterir
top                     # Real-time proses ve resurs istatistikas>
kill PID                # Prosesin PID-ni dayandirir
wget url                # Internetden fayl yukleyir
curl url                # Internetden fayl/melumat alir
ssh user@host           # Uzaq servere baglanir
scp fayl user@host:/yol # Fayli uzaq servere kopyalayir
history                 # Əvvəlki komandaları gosterir
clear                   # Terminali temizleyir

find . -type d -empty           # Boş qovluqları tapır
-exec touch {}/.gitkeep \;      # Hər boş qovluğun içinə .gitkeep>

find . -type f -name ".gitkeep" # Faylı tapırıq

grep "text" fayl        # Faylda text axtarir
grep "error" log.txt    # Faylda axtarış

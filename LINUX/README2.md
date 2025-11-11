```
# 1. Boş qovluqları tapıb .gitkeep yaratmaq
find . -type d -empty -exec touch {}/.gitkeep \;

# 2. Bütün .log faylları silmək
find . -type f -name "*.log" -exec rm {} \;

# 3. Cari qovluqda ən böyük 10 fayl
du -ah . | sort -rh | head -n 10

# 4. İstifadəçinin IP ünvanını göstərmək
ip a | grep inet

# 5. Cari qovluqda bütün faylları axtarışa verib “TODO” sözünü tapmaq
grep -rnw '.' -e 'TODO'
```

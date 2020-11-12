@echo off
Rem Thu muc chua cac ban release
set RELEASE_FOLDER=Release
set SRC_LIST=page3.html
set FTP_SCRIPT=release.ftp.txt
set FTP_USERNAME=myaccount
set FTP_PASSWORD=mypassword


for /f "tokens=1-4 delims=/ " %%i in ("%date%") do (
     set dow=%%l
     set month=%%j
     set day=%%i
     set year=%%k
)
set ver=%year%%month%%day%
echo %year%
echo %month%
echo %day%

Rem Tao thu muc chua file release
mkdir "%RELEASE_FOLDER%\%ver%"


Rem Tao file version moi
echo %ver% > "%RELEASE_FOLDER%\%ver%\version.txt"

Rem Copy cac file se release vao thu muc luu tru
(for %%f in (%SRC_LIST%) do ( 
   call copy  "%%f"  "%RELEASE_FOLDER%\%ver%"
))

Rem Tao file ftp script de copy cac file trong thư mục nói trên lên FTP server
echo open snap.techlinkvn.com > %FTP_SCRIPT%
echo %FTP_USERNAME%>>%FTP_SCRIPT%
echo %FTP_PASSWORD%>>%FTP_SCRIPT%
echo binary >> %FTP_SCRIPT%
echo mkdir %ver% >> %FTP_SCRIPT%
echo cd %ver% >> %FTP_SCRIPT%
echo put "%RELEASE_FOLDER%\%ver%\version.txt" >> %FTP_SCRIPT%
(for %%f in (%SRC_LIST%) do ( 
   echo put "%RELEASE_FOLDER%\%ver%\%%f" >> %FTP_SCRIPT%
))
echo quit >> %FTP_SCRIPT%

Rem Thực hiện copy lên ftp
ftp -s:%FTP_SCRIPT% 

start explorer ftp://%FTP_USERNAME%:%FTP_PASSWORD%@snap.techlinkvn.com/%ver%

@echo on
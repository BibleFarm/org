ECHO OFF
FOR /F "delims=	 tokens=1,2,3,*" %%A IN (KJV_THE_WORD_2016-12-10_fixed_untagged_strongs.php) DO echo %%B >> Module_Pages/module_KJV_PCEbeta_with_strongs_%%A.php
pause

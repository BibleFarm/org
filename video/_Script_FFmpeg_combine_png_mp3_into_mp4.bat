REM // original working @ 552kb //for /F "delims=	 tokens=1,2,*" %%a in (list_to_create_videos.txt) do ffmpeg -loop 1 -i %%a.png -i %%a.mp3 -c:v libx264 -c:a aac -strict experimental -b:a 192k -pix_fmt yuv420p -movflags +faststart -s 600x600 -shortest %%a.mp4 > pause

for /F "delims=	 tokens=1,2,*" %%a in (_Script_FFmpeg_combine_png_mp3_into_mp4.txt) do ffmpeg -loop 1 -framerate 2 -i %%a.png -i %%a.mp3 -c:v libx264 -c:a aac -strict experimental -profile:v high -crf 23 -b:a 128k -pix_fmt yuv420p -movflags +faststart -s 600x600 -shortest %%a.mp4


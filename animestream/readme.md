*    [Beranda](https://web.archive.org/web/20221001232850/https://www.dayat.id/ "Beranda")
*    [Javascript](https://web.archive.org/web/20221001232850/https://www.dayat.id/search/label/Javascript "Javascript")

Membuat Multi Tab Streaming versi AnimeStream
=============================================

![Membuat Multi Tab Streaming versi AnimeStream](https://web.archive.org/web/20221001232850im_/https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjquYfFXs8geOp-vTHLFu3Ma7oZPQ72HUFK1hZpDpg12idXxoRlbV31MgJ1Pu1Pf_SvlhljdSb6eTiaDPRdL15Hqym2DK_ImqF6Po54D7ef3mPypF7JpP5C2R-PLDgi6uEOUEXHqkByl6yuVrLlEvulbvwB5HEvCUBU3rzTLJu-ETI7HUw_OJlfCvYsAQ/s0/DAYAT.ID.png)

Dayat

Langkah pertama silahkan pasang css berikut kedalam template tepat nya di atas tag `]]></b:skin>`.

    .item.video-nav,.item.video-nav *,.video-content,.video-content *{box-sizing:border-box}.video-content{background:#000;overflow:hidden;position:relative}#embed_holder{position:relative;z-index:102}#pembed{position:relative;max-width:100%;height:0;padding-bottom:58.4%}#embed_holder iframe,#embed_holder video{z-index:102;position:absolute;border:none;width:100%!important;height:100%!important;top:0;left:0;margin:0;padding:0}#pembed .playBtn,#pembed .skipBtn{z-index:103;position:absolute;border:none}#pembed .playBtn{background:url(https://www.gstatic.com/images/icons/material/system/1x/play_arrow_white_48dp.png);background-repeat:no-repeat;width:50%;height:100%;left:0;right:0;margin:auto;background-position:center;cursor:pointer;display:block}#pembed .skipBtn{background-color:#000;background-repeat:no-repeat;border:none;cursor:pointer;overflow:hidden;outline:0;opacity:.5;color:#fff;font-weight:700;padding:10px;font-size:16px;bottom:20px;right:20px}.item.video-nav{background:#fff;position:relative;overflow:hidden;padding:10px 15px;font-size:.85em;overflow:hidden;margin-bottom:15px}select.mirror{float:left;border:1px solid #dbdbdb;border-radius:4px;color:#363636;-webkit-box-shadow:inset 0 1px 2px hsla(0,0%,4%,.1);box-shadow:inset 0 1px 2px hsla(0,0%,4%,.1);padding:5px 3px;font-family:inherit;font-size:13px;font-weight:300}.video-nav .iconx{float:right;margin-left:10px;overflow:hidden}.iconx .icol{display:inline-block;margin-left:7px;padding:5px;font-size:12.5px;cursor:pointer}.iconx a{border:1px solid #f05252;display:inline-block;color:#f05252;border-radius:3px;margin-left:10px;font-weight:500}.iconx .icol span{line-height:20px}.icol.turnedOff{color:#fff;z-index:104;position:relative}.iconx .icol .fa-lightbulb{color:#ecbc2a}.iconx .icol .far{font-size:14px;margin-right:2px}.iconx a .icol{display:block;margin:0;padding:3px 10px}.iconx .icol .fa-cloud-download-alt{color:#f05252}.iconx .icol .fa,.iconx .icol .fas{font-size:14px;font-weight:700;margin-right:2px}.shadowStream{position:fixed;left:0;top:0;bottom:0;background:rgba(0,0,0,.93);width:100%;height:100%;z-index:100;transition:all .5s ease}

Langkah kedua, masih di dalam template pasang javascript berikut di atas tag `</body>`

    <script type='text/javascript'>/*<![CDATA[*/
    (e=>{this.timer;const t=this;let n=document.querySelector(".video-content #embed_holder #pembed"),r=document.querySelector(".item.video-nav .mobius select.mirror"),a=document.createElement("iframe"),i=document.createElement("video"),d=document.createElement("button"),l=document.createElement("button"),s=document.querySelector(".icol.light"),c=document.createElement("div");a.setAttribute("allow","accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"),a.setAttribute("frameborder","0"),i.setAttribute("width","100%"),i.setAttribute("height","auto"),i.innerHTML=`<source src="${e.adsVideo}">Your browser does not support HTML5 video.`,l.className="skipBtn",d.className="playBtn",c.className="shadowStream",n&&r&&(i.addEventListener("click",()=>{window.open(e.adsUrl,"_blank")}),r.addEventListener("change",r=>{let s=r.currentTarget.value;0!==s.length&&(n.innerHTML="",a.src=s,e.ads?e.adsNotPlayAgain?n.appendChild(a):(i.onplay=(()=>{l.style.display="block",l.innerHTML="";let n=e.adsSkip;t.timer=setInterval(()=>{l.innerHTML=`Skip Ads ${--n}`,n<=0&&(clearInterval(t.timer),l.innerHTML="Skip",l.disabled=!1)},1e3)}),i.onended=(()=>{n.innerHTML="",n.appendChild(a)}),i.pause(),i.currentTime=0,l.disabled=!0,clearInterval(t.timer),l.style.display="none",n.appendChild(d),n.appendChild(i),n.appendChild(l),l.addEventListener("click",()=>{i.pause(),n.innerHTML="",n.appendChild(a)}),d.addEventListener("click",t=>{e.adsPlayAgain||(e.adsNotPlayAgain=!0),t.currentTarget.remove(),i.play()})):n.appendChild(a))}),r.selectedIndex=1,r.dispatchEvent(new Event("change")),s&&(s.addEventListener("click",e=>{let t=e.currentTarget;t.querySelector("i").removeAttribute("class"),t.classList.contains("turnedOff")?(c.remove(),t.classList.remove("turnedOff"),t.querySelector("span").innerHTML="Turn On Light",t.querySelector("i").className="far fa-lightbulb"):(document.body.appendChild(c),t.classList.add("turnedOff"),t.querySelector("span").innerHTML="Turn Off Light",t.querySelector("i").className="fas fa-lightbulb")}),c.addEventListener("click",()=>{c.remove(),s.classList.remove("turnedOff"),s.querySelector("span").innerHTML="Turn On Light",s.querySelector("i").className="far fa-lightbulb"})))})({
      ads: true,
      adsUrl: "https://www.google.com",
      adsVideo: "https://www.w3schools.com/html/mov_bbb.mp4",
      adsSkip: 5,
      adsPlayAgain: false
    });
    /*]]>*/</script>

Bagian yang di tandai begini penjelasan nya.

key

Desc

`ads`

true jika memakai ads dengan video, false jika tidak.

`adsUrl`

link tempat iklan yang di tuju.

`adsVideo`

video iklan (harus berformat mp4 atau video tidak bisa embed youtube. Contoh di akhir link nya terdapat "`.mp4`").

`adsSkip`

Timer untuk tombol skip.

`adsPlayAgain`

true jika iklan video ingin di putar kembali saat ganti server, false jika tidak.

Selanjut nya simpan template, dan pasang html berikut ke dalam postingan baru.

    <div class='video-content'>
      <div id='embed_holder' class='lowvid'>
        <div class='player-embed' id='pembed'></div>
      </div>
    </div>
    <div class='item video-nav'>
      <div class='mobius'>
        <select class='mirror' name='mirror'>
          <option value=''>Select Video Server</option>
          <option value='url_server' data-server='1'>name_server</option>
          <option value='url_server' data-server='2'>name_server</option>
        </select>
        <div class='iconx'>
          <div class='icol light'>
            <i class='far fa-lightbulb'></i> <span>Turn Off Light</span>
          </div>
          <a href='link_download' target='_blank' rel='nofollow'>
            <div class='icol'>
              <i class='fas fa-cloud-download-alt'></i> <span>Download</span>
            </div>
          </a>
        </div>
      </div>
    </div>

Ganti yang di tandai sesuai dengan keterangan nya. Dan selesai.

[Demo](https://web.archive.org/web/20221001232850/https://demo-source-code.blogspot.com/2022/08/multi-tab-anime-stream.html "Membuat Multi Tab Streaming versi AnimeStream")

*   [_WhatsApp_](https://web.archive.org/web/20221001232850/https://wa.me/?text=Membuat Multi Tab Streaming versi AnimeStream - http://www.dayat.id/2022/08/membuat-multi-tab-streaming-versi.html "WhatsApp")
*   [_Telegram_](https://web.archive.org/web/20221001232850/https://t.me/share/url?url=http://www.dayat.id/2022/08/membuat-multi-tab-streaming-versi.html&text=Membuat Multi Tab Streaming versi AnimeStream "Telegram")
*   [_Facebook_](https://web.archive.org/web/20221001232850/https://www.facebook.com/sharer.php?u=http://www.dayat.id/2022/08/membuat-multi-tab-streaming-versi.html "Facebook")
*   [_Twitter_](https://web.archive.org/web/20221001232850/https://twitter.com/share?url=http://www.dayat.id/2022/08/membuat-multi-tab-streaming-versi.html&text=Membuat Multi Tab Streaming versi AnimeStream "Twitter")
*   [_Linkedin_](https://web.archive.org/web/20221001232850/https://www.linkedin.com/sharing/share-offsite/?url=http://www.dayat.id/2022/08/membuat-multi-tab-streaming-versi.html&title=Membuat Multi Tab Streaming versi AnimeStream "Linkedin")

{ "@context": "https://web.archive.org/web/20221001232850/http://schema.org", "@type": "BlogPosting", "mainEntityOfPage": { "@type": "WebPage", "@id": "https://web.archive.org/web/20221001232850/http://www.dayat.id/2022/08/membuat-multi-tab-streaming-versi.html" }, "headline": "Membuat Multi Tab Streaming versi AnimeStream", "description": "Langkah pertama silahkan pasang css berikut kedalam template tepat nya di atas tag \]\]\\u0026gt;\\u0026lt;/b:skin\\u0026gt; . .item.video-nav,.item.video-nav \*,.video-con&#8230;", "articleBody": "Langkah pertama silahkan pasang css berikut kedalam template tepat nya di atas tag \]\]\\u0026gt;\\u0026lt;/b:skin\\u0026gt; . .item.video-nav,.item.video-nav \*,.video-content,.video-content \*{box-sizing:border-box}.video-content{background:#000;overflow:hidden;position:relative}#embed\_holder{position:relative;z-index:102}#pembed{position:relative;max-width:100%;height:0;padding-bottom:58.4%}#embed\_holder iframe,#embed\_holder video{z-index:102;position:absolute;border:none;width:100%!important;height:100%!important;&#8230;", "datePublished": "2022-08-05T16:29:00+07:00", "dateModified": "2022-08-05T16:29:34+07:00", "image": { "@type": "ImageObject", "url": "https://web.archive.org/web/20221001232850/https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjquYfFXs8geOp-vTHLFu3Ma7oZPQ72HUFK1hZpDpg12idXxoRlbV31MgJ1Pu1Pf\_SvlhljdSb6eTiaDPRdL15Hqym2DK\_ImqF6Po54D7ef3mPypF7JpP5C2R-PLDgi6uEOUEXHqkByl6yuVrLlEvulbvwB5HEvCUBU3rzTLJu-ETI7HUw\_OJlfCvYsAQ/w1200-h630-p-k-no-nu/DAYAT.ID.png", "height": 630, "width": 1200 }, "publisher": { "@type": "Organization", "name": "Blogger", "logo": { "@type": "ImageObject", "url": "https://web.archive.org/web/20221001232850/https://lh3.googleusercontent.com/ULB6iBuCeTVvSjjjU1A-O8e9ZpVba6uvyhtiWRti\_rBAs9yMYOFBujxriJRZ-A=h60", "width": 206, "height": 60 } },"author": { "@type": "Person", "name": "Шош. Сом" } }

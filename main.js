let streamingFiles = [{
    'title': 'Someone Who Lives in the Exact Opposite World as Me',
    'episode': '1',
    'files': [{
      0: 'Gdrive 480p',
      1: 'https://www.youtube.com/embed/hiHwoITyuPg',
      2: 'sub'
    }, {
      0: 'Youtube All Resolution',
      1: 'https://www.youtube.com/embed/kWrLU5Mucqs',
      2: 'sub'
    }, {
      0: 'GDrive 720p',
      1: 'https://www.youtube.com/embed/ctcMylqea4Q',
      2: 'dub'
    }]
  }, {
    'title': 'Wanna Hurry Up, and Do It?',
    'episode': '2',
    'files': [{
      0: 'Gdrive 480p',
      1: 'https://www.youtube.com/embed/0KROgbD0kfQ'
    }, {
      0: 'Youtube All Resolution',
      1: 'https://www.youtube.com/embed/YFgM4SaEAxM'
    }]
  }, {
    'title': 'Then Why Don&#39;t We?',
    'episode': '3',
    'files': [{
      0: 'Gdrive 480p',
      1: 'https://www.youtube.com/embed/W7xzGkUL9SI'
    }, {
      0: 'Youtube All Resolution',
      1: 'https://www.youtube.com/embed/QUcg6WOEWoo'
    }]
  }],
  streamingId = 'One Piece';


(function (a, b) {
  if (typeof streamingFiles != 'object' && streamingFiles.length != 0 && typeof stremingId != 'string') {
    return;
  }

  let listEpisode = a.getElementById('list-episode'),
    lightBulb = a.getElementById('lightBulb');

  function _createListEpisode(title, number, index) {
    return `<a data-index="${index}" data-episode-list-index="${number}" class="before:bg-accent-3 relative flex gap-5 bg-white px-4 py-2 text-sm font-normal before:absolute before:inset-y-0 before:left-0 before:h-full odd:bg-opacity-10 even:bg-opacity-0 lg:py-3 lg:font-medium" href="#${number}" title="${title}"> ${number} <span class="line-clamp-1 max-w-[75%]">${title}</span></a>`;
  }

  function _createIframe(url, title) {
    return `<iframe src="${url}" title="${title}" allow="accelerometer; autoplay;gyroscope; picture-in-picture" allowfullscreen="" loading="eager" frameborder="0"></iframe>`;
  }

  function _createServer(name, url) {
    let _span = a.createElement('span');
    _span.className = 'bg-accent w-fit cursor-pointer rounded-sm px-2 py-1 shadow-md drop-shadow';
    _span.dataset.url = url;
    _span.innerHTML = name;
    return _span;
  }

  if (listEpisode) {
    let _htmlListEpisode = '';
    streamingFiles.forEach((item, index) => {
      _htmlListEpisode += _createListEpisode(item.title, item.episode, index);
    });
    listEpisode.innerHTML = _htmlListEpisode;

    let _a = listEpisode.querySelectorAll('a'),
      _pembed = a.getElementById('pembed'),
      _subServer = a.getElementById('sub-server'),
      _dubServer = a.getElementById('dub-server'),
      _epname = a.getElementById('epname'),
      _npep = a.querySelectorAll('.npep'),
      episode_number = a.querySelector('input[name="episode_number"]');
    _a.forEach((i, index) => {
      i.addEventListener('click', (e) => {
        let _currentTarget = e.currentTarget,
          _objectFiles = streamingFiles.find(item => item.episode == _currentTarget.dataset.episodeListIndex);
        _pembed.innerHTML = _createIframe(_objectFiles.files[0][1], _objectFiles.title);
        localStorage.setItem(`${streamingId} last-watched`, index);
        (_dubServer || _subServer).parentElement.querySelectorAll('span').forEach(i => {
          if (i.dataset.type != 'dub' && i.dataset.type != 'sub') {
            i.remove();
          }
        });
        _npep.forEach(i => {
          if (i.dataset.type == 'prev') {
            if ((index - 1) != -1) {
              i.href = `#${index - 1}`;
              i.dataset.index = index - 1;
              i.disabled = false;
            } else {
              i.removeAttribute('href');
              i.disabled = true;
            }
          } else if (i.dataset.type == 'next') {
            if ((index + 1) != _a.length) {
              i.href = `#${index + 1}`;
              i.dataset.index = index + 1;
              i.disabled = false;
            } else {
              i.removeAttribute('href');
              i.disabled = true;
            }
          }
        });
        _objectFiles.files.forEach(item => {
          let _html = _createServer(item[0], item[1]);
          _html.addEventListener('click', () => {
            _pembed.innerHTML = _createIframe(item[1], item[0]);
          });
          if (item[2] == 'dub') {
            _dubServer.appendChild(_html)
          } else {
            _subServer.appendChild(_html)
          }
        })
        _epname.innerHTML = 'Episode ' + _currentTarget.dataset.episodeListIndex;
        _a.forEach(i => i.classList.remove('active'));
        e.currentTarget.classList.add('active');
      })
    });
    _npep.forEach(i => {
      i.addEventListener('click', (e) => {
        if (e.currentTarget.href) {
          _a[e.currentTarget.dataset.index].click();
        }
      })
    });
    episode_number.addEventListener('keyup', (e) => {
      _a.forEach(i => {
        if (i.dataset.episodeListIndex.includes(e.currentTarget.value)) {
          i.style.display = '';
        } else {
          i.style.display = 'none';
        }
      })
    })
    let _local = localStorage.getItem(`${streamingId} last-watched`);
    _local ? _a[_local].click() : _a[0].click();
  }

  if(lightBulb) {
    [lightBulb, a.getElementById('shadow')].forEach(i => {
      i.addEventListener('click', () => {
        a.getElementById('shadow').classList.toggle('active');
      })
    })
  }


})(document, window);
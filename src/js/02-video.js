import videoplayer from '@vimeo/player';
import throttle from 'lodash.throttle';

const storageKey = "videoplayer-current-time";
const iframe = document.querySelector('iframe');
const player = new videoplayer(iframe);
    
player.on('timeupdate', throttle(data => localStorage.setItem(storageKey, data.seconds), 1000));
player.setCurrentTime(localStorage.getItem(storageKey));

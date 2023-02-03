function formatDate(date) {
    let now = new Date();
    let difference = now - date;
    if (difference < 1000) {
        return 'right now';
    } 
    let sec = Math.floor(difference / 1000);
    if (sec < 60) {
        return `${sec} seconds ago`;
    }

    let min = Math.floor(diff / 60000);
    if (min < 60) {
        return `${min} minutes ago`;
    }

    let d = date;
  d = [
    '0' + d.getDate(),
    '0' + (d.getMonth() + 1),
    '' + d.getFullYear(),
    '0' + d.getHours(),
    '0' + d.getMinutes()
  ].map(component => component.slice(-2)); 

  
  return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
}
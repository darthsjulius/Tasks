styles = ['Jazz', 'Blues'];
styles.push('Rock\'n\'Roll');
styles[Math.floor((styles.length-1) / 2)] = 'Classics'; /* не сразу додумалась 
использовать округление, сначала написала ветвление с проверкой на четность*/
alert(styles.shift());
styles.unshift('Rap', 'Reggae');
1
function hasTwoCubeSums(n) {
  let ways = 0;
  for (let a = 1; a ** 3 < n; a++) {
    for (let b = a + 1; a ** 3 + b ** 3 <= n; b++) {
      if (a ** 3 + b ** 3 === n) ways++;
    }
  }
  return ways >= 2;
}
2
function ipv4Parser(ip, mask) {
  const a = ip.split('.').map(Number);
  const m = mask.split('.').map(Number);
  return [
    a.map((x, i) => x & m[i]).join('.'),
    a.map((x, i) => x & ~m[i] & 255).join('.')
  ];
}
3
function whatCentury(year) {
  const c = Math.ceil(year / 100);
  if (c % 100 >= 11 && c % 100 <= 13) return c + 'th';
  if (c % 10 === 1) return c + 'st';
  if (c % 10 === 2) return c + 'nd';
  if (c % 10 === 3) return c + 'rd';
  return c + 'th';
}
4
function findMissing(list) {
  const step = (list.at(-1) - list[0]) / list.length;
  for (let i = 0; i < list.length - 1; i++) {
    if (list[i + 1] - list[i] !== step) return list[i] + step;
  }
}
5
function primeFactors(n) {
  let res = '';
  for (let p = 2; p * p <= n; p++) {
    let k = 0;
    while (n % p === 0) { n /= p; k++; }
    if (k === 1) res += `(${p})`;
    if (k > 1) res += `(${p}**${k})`;
  }
  if (n > 1) res += `(${n})`;
  return res;
}
6
function toWeirdCase(string) {
  return string.split(' ').map(w =>
    [...w].map((c, i) => i % 2 ? c.toLowerCase() : c.toUpperCase()).join('')
  ).join(' ');
}

7.function wave(str) {
  const result = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') continue;
    result.push(str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1));
  }
  return result;
}
8.
function expandedForm(num) {
  const s = String(num);
  const parts = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== '0') {
      parts.push(s[i] + '0'.repeat(s.length - 1 - i));
    }
  }
  return parts.join(' + ');
}
9. 
function solution(str) {
  if (str.length % 2 === 1) str = str + '_';
  const result = [];
  for (let i = 0; i < str.length; i += 2) {
    result.push(str[i] + str[i + 1]);
  }
  return result;
}
10.
function bingo(ticket, win) {
  let count = 0;
  for (let i = 0; i < ticket.length; i++) {
    const text = ticket[i][0];
    const num = ticket[i][1];
    for (let j = 0; j < text.length; j++) {
      if (text.charCodeAt(j) === num) {
        count++;
        break;
      }
    }
  }
  if (count >= win) return 'Winner!';
  return 'Loser!';
}
11. 
function domainName(url) {
  url = url.replace('http://', '');
  url = url.replace('https://', '');
  url = url.replace('www.', '');
  return url.split('.')[0];
}
12.
function longest(arr, n) {
  const items = [];
  for (let i = 0; i < arr.length; i++) {
    items.push({ text: arr[i], index: i });
  }
  items.sort(function (a, b) {
    if (b.text.length !== a.text.length) return b.text.length - a.text.length;
    return a.index - b.index;
  });
  return items[n - 1].text;
}
13. 
function hexStringToRGB(hexString) {
  return {
    r: parseInt(hexString.slice(1, 3), 16),
    g: parseInt(hexString.slice(3, 5), 16),
    b: parseInt(hexString.slice(5, 7), 16)
  };
}
14.
function isCircleSorted(arr) {
  let drops = 0;
  for (let i = 0; i < arr.length; i++) {
    const next = arr[(i + 1) % arr.length];
    if (arr[i] > next) drops++;
  }
  return drops <= 1;
}

function domainName(url){
  url = url.replace('http://', '').replace('https://', '').replace('www.', '');
  let domain = url.split('.')[0];
  return domain;
}

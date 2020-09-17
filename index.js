tokenizer=function(s){
  String.prototype.lastReplace=function(s1,s2){
    function reverse(s3) {
        return s3.split("").reverse().join("");
    }
    return reverse(reverse(this).replace(reverse(s1),reverse(s2)));
}
  let r = [];
  let a = s.replace(/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi,"").replace(/하였다|했다|했었다|할거다|하세요|한다/g,/*하다*/"").replace(/였다|였었다|입니다|일거다/g,/*이다*/"").replace(/렸다|렸었다|릴거다/g,/*리다*/"").replace(/었다/g,/*이다*/"").split(" ");
  let j = ["은","는","가","께","이","의","을","를","에","라고","랑","과","에","고","께서","에서","에게","한테","부터","로부터","와","과"];
    for(w in a){
        r.push(a[w]);
        for(i in j){
            if(a[w].endsWith(j[i])&&a[w].length>2) {
              r[w]=(a[w].lastReplace(j[i],""));
              break;
          } 
      }
    }
  return r;
}

cos_sim=function(v1,v2){
  let a=tokenizer(v1.trim() + " "+ v2.trim());
  a=a.filter((i,i2)=>a.indexOf(i)==i2);
  v1=bow(tokenizer(v1),a);
  v2=bow(tokenizer(v2),a);
  return (dot(v1, v2)/(norm(v1)*norm(v2))).toFixed(2);
}

bow=function(w,b){
  let a=new Array(b.length).fill(0);
  for(v in b)if(w.indexOf(b[v])!=-1)a[v]+=1;
  return a;
}
    
dot=function(a1,a2){
  let a = [];
  for(i in a1)a[i]=a1[i]*a2[i];
  return a.reduce((s,e)=>s+e,0);
}

norm=function(x){
  let r = 0;
  for(i in x)r+=Math.pow(Math.abs(x[i]),2);
  return Math.pow(r,1/2);
}

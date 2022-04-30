*/
const $ = new Env('抖音极速版');
let status;
status = (status = ($.getval("douyinstatus") || "1")) > 1 ? `${status}` : ""; // 账号扩展字符
let douyinhdArr = [], 
    douyinbxhdArr = [], 
    douyinkbxhdArr = [],
    douyinzqhdArr = [],
    douyinzbbxdArr = [],
    douyincount = ''

//总音符
let douyinzyfurl = ($.isNode() ? process.env.douyinzyfurl :       $.getdata('douyinzyfurl')) || '';

//限时任务
let douyinurl = ($.isNode() ? process.env.douyinurl :       $.getdata('douyinurl')) || '';
let douyinhd = ($.isNode() ? 
process.env.douyinhd :        $.getdata('douyinhd')) || '';
let douyinbody = ($.isNode() ? process.env.douyinbody :    $.getdata('douyinbody')) || '';


//抖音开宝箱
let douyinkbxurl = ($.isNode() ? process.env.douyinkbxurl : $.getdata('douyinkbxurl')) || '';
let douyinkbxhd = ($.isNode() ? process.env.douyinkbxhd :  $.getdata('douyinkbxhd')) || '';
let douyinkbxbody = ($.isNode() ? process.env.douyinkbxbody : $.getdata('douyinkbxbody')) || '';


//抖音宝箱广告
let douyinbxurl = ($.isNode() ? process.env.douyinbxurl :  $.getdata('douyinbxurl')) || '';
let douyinbxhd = ($.isNode() ? process.env.douyinbxhd :    $.getdata('douyinbxhd')) || '';
let douyinbxbody = ($.isNode() ? process.env.douyinbxbody :$.getdata('douyinbxbody')) || '';


//抖音转圈圈视频
let douyinzqurl = ($.isNode() ? process.env.douyinzqurl :  $.getdata('douyinzqurl')) || '';
let douyinzqhd = ($.isNode() ? 
process.env.douyinzqhd :    $.getdata('douyinzqhd')) || '';
let douyinzqbody = ($.isNode() ?process.env.douyinzqbody : $.getdata('douyinzqbody')) || '';


//抖音直播宝箱
let douyinzbbxurl = ($.isNode() ? process.env.douyinzbbxurl : $.getdata('douyinzbbxurl')) || '';
let douyinzbbxhd = ($.isNode() ? 
process.env.douyinzbbxhd : $.getdata('douyinzbbxhd')) || '';
let douyinzbbxbody = ($.isNode() ?process.env.douyinzbbxbody:$.getdata('douyinzbbxbody')) || '';
  
//开始运行
!(async () => {
  if (typeof $request !== "undefined") {
    await douyinck()

  } else {
    
    douyinzyfurlArr = douyinzyfurl.split('@')

    douyinurlArr = douyinurl.split('@')
    douyinhdArr = douyinhd.split('@')
    douyinbodyArr = douyinbody.split('@')
     
    douyinbxurlArr = douyinbxurl.split('@')
    douyinbxhdArr = douyinbxhd.split('@')
    douyinbxbodyArr = douyinbxbody.split('@')

    douyinkbxurlArr = douyinkbxurl.split('@')
    douyinkbxhdArr = douyinkbxhd.split('@')
    douyinkbxbodyArr = douyinkbxbody.split('@')

    douyinzqurlArr = douyinzqurl.split('@')
    douyinzqhdArr = douyinzqhd.split('@')
    douyinzqbodyArr = douyinzqbody.split('@')

    douyinzbbxurlArr = douyinzbbxurl.split('@')
    douyinzbbxhdArr = douyinzbbxhd.split('@')
    douyinzbbxbodyArr = douyinzbbxbody.split('@')
    
    console.log(`      ------------- 共${douyinhdArr.length}个账号-------------\n`)
    for (let i = 0; i < douyinhdArr.length; i++) {
   
      douyinzyfurl = douyinzyfurlArr[i]
   
      douyinurl = douyinurlArr[i]
      douyinhd = douyinhdArr[i]
      douyinbody = douyinbodyArr[i]
      
      douyinbxurl = douyinbxurlArr[i]
      douyinbxhd = douyinbxhdArr[i]
      douyinbxbody = douyinbxbodyArr[i]


      douyinkbxurl = douyinkbxurlArr[i]
      douyinkbxhd = douyinkbxhdArr[i]
      douyinkbxbody = douyinkbxbodyArr[i]

      douyinzqurl = douyinzqurlArr[i]
      douyinzqhd = douyinzqhdArr[i]
      douyinzqbody = douyinzqbodyArr[i]

      douyinzbbxurl = douyinzbbxurlArr[i]
      douyinzbbxhd = douyinzbbxhdArr[i]
      douyinzbbxbody = douyinzbbxbodyArr[i]
      $.index = i + 1;
      
console.log(`\n               开始【抖音极速版${$.index}】\n`)
console.log(`\n\n===============================================                                                     ⏰脚本执行-北京时间(UTC)：${new Date().toLocaleString()}        ===============================================\n   \n`)
      
 
           
            await dyqd()//你要执行的版块
            await $.wait(1000)//你要延迟时间1000=1秒
            await dyxssp()  
            await $.wait(1000)
            await dykbx()
            await $.wait(1000)
            await dybxgg()
            await $.wait(1000)
            await dyzbkbx()
//循环运行多次任务
  for (let c = 0; c < 10; c++) {
           $.index = c + 1            
            await dyzq()
            await $.wait(20000)
      }
            await dyqd()
    }
  }

})()
  .catch((e) => $.logErr(e))
  .finally(() => $.done())


//数据获取
//限时广告数据
function douyinck() {
    if ($request.url.indexOf("excitation_ad") > -1) {
        const douyinurl = $request.url
        if (douyinurl) $.setdata(douyinurl, `douyinurl${status}`)
        $.log(douyinurl)

        const douyinhd = JSON.stringify($request.headers)
        if (douyinhd) $.setdata(douyinhd, `douyinhd${status}`)
        $.log(douyinhd)

        const douyinbody = $request.body
        if (douyinbody) $.setdata(douyinbody, `douyinbody${status}`)
        $.log(douyinbody)

        $.msg($.name, "", `抖音${status}获取douyinhd成功`)//$.msg这段是通知提示信息获取成功

    }    

//开宝箱
    if ($request.url.indexOf("treasure_task") > -1) {
        const douyinkbxurl = $request.url
        if (douyinkbxurl) $.setdata(douyinkbxurl, `douyinkbxurl${status}`)
        $.log(douyinkbxurl)

        const douyinkbxhd = JSON.stringify($request.headers)
        if (douyinkbxhd) $.setdata(douyinkbxhd, `douyinkbxhd${status}`)
        $.log(douyinkbxhd)

        const douyinkbxbody = $request.body
        if (douyinkbxbody) $.setdata(douyinkbxbody, `douyinkbxbody${status}`)
        $.log(douyinkbxbody)

        $.msg($.name, "", `抖音${status}获取douyinkbxhd成功`)

    }    


    
//宝箱广告数据 
   if ($request.url.indexOf("treasure_box") > -1) {
        const douyinbxurl = $request.url
        if (douyinbxurl) $.setdata(douyinbxurl, `douyinbxurl${status}`)
        $.log(douyinbxurl)

        const douyinbxhd = JSON.stringify($request.headers)
        if (douyinbxhd) $.setdata(douyinbxhd, `douyinbxhd${status}`)
        $.log(douyinbxhd)

        const douyinbxbody = $request.body
        if (douyinbxbody) $.setdata(douyinbxbody, `douyinbody${status}`)
        $.log(douyinbxbody)

        $.msg($.name, "", `抖音${status}获取douyinbxhd成功`)//$.msg这段是通知提示信息获取成功

    }


//看视频转圈圈数据
    if ($request.url.indexOf("read") > -1) {
        const douyinzqurl = $request.url
        if (douyinzqurl) $.setdata(douyinzqurl, `douyinzqurl${status}`)
        $.log(douyinzqurl)

        const douyinzqhd = JSON.stringify($request.headers)
        if (douyinzqhd) $.setdata(douyinzqhd, `douyinzqhd${status}`)
        $.log(douyinzqhd)

        const douyinzqbody = $request.body
        if (douyinzqbody) $.setdata(douyinzqbody, `douyinzqbody${status}`)
        $.log(douyinzqbody)

        $.msg($.name, "", `抖音${status}获取douyinzqhd成功`)//$.msg这段是通知提示信息获取成功

    }

//看直播开宝箱     
    if ($request.url.indexOf("live_treasure") > -1) {
        const douyinzbbxurl = $request.url
        if (douyinzbbxurl) $.setdata(douyinzbbxurl, `douyinzbbxurl${status}`)
        $.log(douyinzbbxurl)

        const douyinzbbxhd = JSON.stringify($request.headers)
        if (douyinzbbxhd) $.setdata(douyinzbbxhd, `douyinzbbxhd${status}`)
        $.log(douyinzbbxhd)

        const douyinzbbxbody = $request.body
        if (douyinzbbxbody) $.setdata(douyinzbbxbody, `douyinzbbxbody${status}`)
        $.log(douyinzbbxbody)

        $.msg($.name, "", `抖音${status}获取douyinzbbxhd成功`)//$.msg这段是通知提示信息获取成功

    }

//显示总音符

if ($request.url.indexOf("page") > -1) {
        const douyinzyfurl = $request.url
        if (douyinzyfurl) $.setdata(douyinzyfurl, `douyinzyfurl${status}`)
        $.log(douyinzyfurl)
           $.msg($.name, "", `抖音${status}获取douyinzyfurl成功`)//$.msg这段是通知提示信息获取成功

    }

}

//👇以下是任务👇

//抖音显示总音符
function dyqd(timeout = 0) {
    return new Promise((resolve) => {

        let url = {
            url: douyinzyfurl,
            headers: JSON.parse(douyinhd),
            //body: `douyinbody`,
        }
        $.get(url, async (err, resp, data) => {
            try {

                data = JSON.parse(data)//返回體

                if (data.err_no == 0) {
            
            console.log(`\n🎶我的音符${data.data.income_data.amount1}🎶\n`)//打印返回成功數值

                //else是不然的意思
                } else {

            console.log(   )//打印返回失敗數值
                }
            } catch (e) {

            } finally {

                resolve()
            }
        }, timeout)
    })
}


//抖音限时任务音符
function dyxssp(timeout = 0) {
    return new Promise((resolve) => {

        let url = {
            url: douyinurl,
            headers: JSON.parse(douyinhd),
            body: douyinbody,
        }
        $.post(url, async (err, resp, data) => {
            try {

                data = JSON.parse(data)//返回体

                if (data.err_no == 0) {
            
            console.log(`📣🎉音符获取成功：${data.data.amount}音符🎶`)//打印返回成功数值

                //else是不然的意思
                } else {

            console.log(`❌🙅音符获取失败：${data.err_tips}`)//打印返回失败数值
                }
            } catch (e) {

            } finally {

                resolve()
            }
        }, timeout)
    })
}

//抖音开宝箱
function dykbx(timeout = 0) {
    return new Promise((resolve) => {

        let url = {
            url: douyinkbxurl,
            headers: JSON.parse(douyinkbxhd),
            body: `{\n  \"in_sp_time\" : 0\n}`,
        }
        $.post(url, async (err, resp, data) => {
            try {

                data = JSON.parse(data)//返回体

                if (data.err_no == 0) {
            
            console.log(`📣🎉开宝箱成功：${data.data.amount}音符🎶`)//打印返回成功数值

                //else是不然的意思
                } else {

            console.log(`❌🙅开宝箱失败：${data.err_tips}`)//打印返回失败数值
                }
            } catch (e) {

            } finally {

                resolve()
            }
        }, timeout)
    })
}

//抖音宝箱看广告
function dybxgg(timeout = 0) {
    return new Promise((resolve) => {

        let url = {
            url: douyinbxurl,
            headers: JSON.parse(douyinbxhd),
            //body: `douyinbody`,
        }
        $.post(url, async (err, resp, data) => {
            try {

                data = JSON.parse(data)//返回体

                if (data.err_no == 0) {
            
            console.log(`📣🎉宝箱广告成功：${data.data.amount}音符🎶`)//打印返回成功数值

                //else是不然的意思
                } else {

            console.log(`❌🙅宝箱广告失败：${data.err_tips}`)//打印返回失败数值
                }
            } catch (e) {

            } finally {

                resolve()
            }
        }, timeout)
    })
}

//抖音看直播開宝箱
function dyzbkbx(timeout = 0) {
    return new Promise((resolve) => {

        let url = {
            url: douyinzbbxurl,
            headers: JSON.parse(douyinzbbxhd),
            //body: `douyinbody`,
        }
        $.get(url, async (err, resp, data) => {
            try {

                data = JSON.parse(data)//返回體

                if (data.err_no == 0) {
            
            console.log(`📣🎉直播宝箱成功：${data.data.amount}音符🎶`)//打印返回成功數值
            console.log(`⚠️⚠️直播宝箱：${data.data.biz_error_msg}`)
                //else是不然的意思
                } else {

            //打印返回失敗數值
                }
            } catch (e) {

            } finally {

                resolve()
            }
        }, timeout)
    })
}

//抖音看视频转圈
function dyzq(timeout = 0) {
    return new Promise((resolve) => {

        let url = {
            url: douyinzqurl,
            headers: JSON.parse(douyinzqhd),
            body: `{\n  \"in_sp_time\" : 0,\n  \"task_key\" : \"read\"\n}`,
        }
        $.post(url, async (err, resp, data) => {
            try {

                data = JSON.parse(data)

                if (data.err_no == 0) {
    console.log(`📣🎉看视频成功：${data.data.score_amount}音符🎶`)//打印返回成功數值
           
               } else {
    console.log(`❌🙅看视频失败：${data.err_tips}`)//打印返回失败数值

                }
            } catch (e) {

            } finally {

                resolve()
            }
        }, timeout)
    })
}

function Env(t, e) { class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `\ud83d\udd14${this.name}, \u5f00\u59cb!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), a = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(a, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t) { let e = { "M+": (new Date).getMonth() + 1, "d+": (new Date).getDate(), "H+": (new Date).getHours(), "m+": (new Date).getMinutes(), "s+": (new Date).getSeconds(), "q+": Math.floor(((new Date).getMonth() + 3) / 3), S: (new Date).getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length))); for (let s in e) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))); let h = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="]; h.push(e), s && h.push(s), i && h.push(i), console.log(h.join("\n")), this.logs = this.logs.concat(h) } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }

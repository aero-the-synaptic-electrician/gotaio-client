/** 
 * @author Aero 
 * @date 11th Sept. 2022, 3:55am GMT
 **/

 var version, showSideMenu, hideSideMenu;
 const build = 2207071;
 !(function () {
   function e(e) {
     var t = $("#" + e);
     "none" == t.css("display") &&
       ($("#main-right")
         .children()
         .each(function () {
           "block" == $(this).css("display") && $(this).slideUp(500);
         }),
       t.slideDown(500));
   }
 
   !(function (e) {
     if (e) {
       for (
         var s = this.location.href.split("://")[1].split("/")[0].split(":")[0],
           a = e.split(","),
           i = 0;
         i < a.length;
         i++
       ) {
         var o = a[i];
         if (o == s || (2 == (o = s.split("." + o)).length && !o[1])) return;
       }
 
       throw "error";
     }
   })("gota.io", 1, ""),
     (version = "3.5.3"),
     $(function () {
       let t = window.PIXI;
       window.PIXI = null;
       let n = new t.Container(),
         s = new t.Container(),
         a = new t.Container(),
         i = new t.Container(),
         o = new t.Container(),
         r = new t.Container(),
         c = new t.Sprite(t.Texture.EMPTY);
       i.addChild(a),
         i.addChild(o),
         i.addChild(r),
         n.addChild(s),
         n.addChild(i),
         n.addChild(c);
 
       var l,
         d,
         h,
         p,
         u,
         f,
         m,
         g,
         v,
         y,
         b,
         k,
         C,
         _,
         w,
         S,
         P,
         U,
         E,
         x,
         T,
         I,
         A,
         D,
         L,
         M,
         F,
         N,
         O,
         R,
         B,
         H,
         z,
         G,
         Y = false,
         W = 0,
         j = 0,
         V = null,
         K = null,
         X = false,
         J = {
           elements: [],
           callbacks: [],
           pendingFriends: [],
           timestamps: []
         },
         Z = [],
         q = false,
         Q = null,
         ee = true;
 
       let et = 2 * Math.PI,
         en = {},
         es = new firebase.auth.GoogleAuthProvider(),
         ea = "https://accounts.gota.io";
       var ei = {
         key: "halloween2020",
         foodColors: [15633692, 11224098, 9453167, 6301513],
         customEjectedMass: false,
         particles: false,
         particlesMax: 100,
         motd: "",
         endDate: 16041888e5,
         enabled: false,
         motherCustomEnabled: false,
         motherCustom: function () {},
         happyMotherCells: []
       };
       (ei.enabled = new Date() < ei.endDate),
         firebase.initializeApp({
           apiKey: "AIzaSyCmYFIIazBPyg5goqvPb-7uA6W9-4TVqEM",
           authDomain: "accounts.gota.io",
           databaseURL: "https://gota-io.firebaseio.com",
           projectId: "gota-io",
           storageBucket: "gota-io.appspot.com",
           messagingSenderId: "570450309042",
           appId: "1:570450309042:web:380ab6c94d44de2f"
         });
       var eo = {},
         er = {},
         ec = {
           levelNames: 3,
           levelSkins: 3,
           textOutlineSize: 0,
           resolution: 1
         },
         el = [
           {
             name: "All",
             flags: 255,
             maxMessages: 100
           },
           {
             name: "Party",
             flags: 2,
             maxMessages: 100
           }
         ],
         ed = 0,
         eh = {
           cDisableAA: false,
           cAutoRespawn: false,
           cHideId: false,
           cHideServerDisplay: true,
           sShowNames: "ALL",
           sShowSkins: "ALL",
           sRenderType: "AUTO",
           sTextOutlines: "NONE",
           sQuality: "ULTRA",
           sMassType: "DEFAULT",
           cTransCells: false,
           cShowMass: false,
           cShowBorder: false,
           cSilentLogin: false,
           cHideChat: false,
           cHideMinimap: false,
           cShowCoordinates: false,
           cHideFood: false,
           cColoredPing: false,
           cColoredCellCount: false,
           cThemeEnabled: false,
           cDisableAutoZoom: false,
           cAutoDecline: false,
           cDisableEventSkins: false,
           cResizableChat: false,
           cDisableAutoNameHiding: false,
           cDisableAutoFoodHiding: false,
           cDisablePersistEjectMass: false,
           iChatWidth: "360px",
           iChatHeight: "250px",
           rUiScale: 1,
           rAnimationDelay: 90,
           rViewDistance: 100,
           _ChatTabs: JSON.parse(JSON.stringify(el))
         },
         ep = {
           kContextMenu: 3,
           kEjectMass: 87,
           kSplit: 32,
           kToggleSpec: 81,
           kDoubleSplit: -1,
           kTripleSplit: -1,
           kQuadSplit: -1,
           kHexaSplit: -1,
           kFreezeMouse: -1
         },
         eu = false;
       let ef = Object.assign({}, ep),
         em = {
           version: 2,
           uiForegroundColor: "rgb(255, 255, 255)",
           uiBackgroundColor: "rgba(22, 22, 22, 0.8)",
           uiBorderColor: "rgba(255, 255, 255, .2)",
           uiMenuBackgroundColor: "#2A2A2A",
           uiMenuTitleBackgroundColor: "#404040",
           uiMenuSubBackgroundColor: "#363636",
           uiMenuSubBackground2Color: "#404040",
           uiButtonColor: "#444444",
           uiGameBackgroundColor: "#121212",
           uiGameGridColor: "rgba(170, 170, 170, .25)",
           uiGameBorderColor: "#ff0000",
           uiLeaderboardHighlightSelf: "#ffaaaa",
           uiLeaderboardHighlightParty: "#ffff00",
           uiPartyLeaderColor: "#00ffff",
           uiGameColorSuccess: "#00ff00",
           uiGameColorWarning: "#ffff00",
           uiGameColorError: "#ff0000",
           _FoodColors: [],
           aCustomBackground: "",
           aCustomSpike: "",
           aCustomMother: "",
           rBorderSize: 32,
           rBackgroundOpacity: 1
         },
         eg = {};
 
       for (var ev in em) eg[ev] = em[ev];
 
       let e$ = {
         aCustomSpike: null,
         aCustomMother: null
       };
       var ey = [],
         eb = {
           rules: false,
           nameColor: {
             r: 0,
             g: 255,
             b: 255
           },
           chatColor: 0,
           lowerName: false,
           skinName: "",
           effect: 0,
           nameFont: 0
         },
         ek = null,
         eC = null,
         e_ = 0;
 
       function ew() {
         (u.width = window.innerWidth * ec.resolution),
           (u.height = window.innerHeight * ec.resolution),
           h.renderer.resize(u.width, u.height),
           (h.stage.position.x = (window.innerWidth * ec.resolution) / 2),
           (h.stage.position.y = (window.innerHeight * ec.resolution) / 2);
       }
 
       function eS(e) {
         for (var t in em) "u" == t.charAt(0) && e(t);
       }
 
       function eP() {
         var e = Date.now() - y;
         y = Date.now();
         var t = Math.min(e / eh.rAnimationDelay, 1);
 
         for (var n in ((W += e), g.foodObjects))
           (c = g.foodObjects[n]).steps > 0 && c.animate(t), c.handleFood();
 
         for (var n in g.bucket)
           (c = g.bucket[n]).steps > 0 && c.animate(t), c.handle();
 
         var s = 0,
           a = 0,
           o = 0,
           r = 0,
           c = null;
 
         for (var n in g.myCells)
           null != (c = g.myCells[n]) &&
             ((s += c.x), (a += c.y), (r += c.size), o++);
 
         0 != o &&
           ((g.centerX = s / o),
           (g.centerY = a / o),
           (g.centerSteps = 0),
           eh.cDisableAutoZoom
             ? (g.scale_base = 0.2 * Math.max(u.height / 1080, u.width / 1920))
             : (g.scale_base =
                 Math.pow(Math.min(32 / r, 1), 0.4) *
                 Math.max(u.height / 1080, u.width / 1920))),
           g.centerSteps > 0 &&
             ((g.centerX += (g.centerX_ - g.centerX) * t),
             (g.centerY += (g.centerY_ - g.centerY) * t));
         var l = g.scale_base * g.mouseZoom;
 
         if (
           ((g.scale = (9 * g.scale + l) / 10),
           (i.scale.x = g.scale),
           (i.scale.y = g.scale),
           (i.pivot.x = g.centerX),
           (i.pivot.y = g.centerY),
           g.isConnected() && "none" == E.css("display") && !g.mouseFrozen)
         ) {
           var d =
               i.pivot.x -
               h.stage.position.x / g.scale +
               (g.mouseRawX * ec.resolution) / g.scale,
             p =
               i.pivot.y -
               h.stage.position.y / g.scale +
               (g.mouseRawY * ec.resolution) / g.scale;
           g.sendPacket(new v.sendMouse(d, p));
         }
 
         if (
           (eh.cHideMinimap ||
             (function (e) {
               if (g.serverData.border.enabled) {
                 m.clearRect(0, 0, f.width, f.height), (m.font = "12px Calibri");
 
                 for (var t = 0; t < g.party.length; t++) {
                   var n = g.party[t];
                   n.state === np.ALIVE &&
                     n.id != g.playerId &&
                     (tu(m, n.name, n.x, n.y, 4, n.mmColor, true),
                     (n.x += (n.x_ - n.x) * e),
                     (n.y += (n.y_ - n.y) * e));
                 }
 
                 tu(m, g.name, g.centerX, g.centerY, 6, "#fefefe", false);
               }
             })(t),
           eh.cShowCoordinates &&
             (en.minimapCoords.css({
               color: em.uiForegroundColor
             }),
             en.minimapCoords.html(
               "X: " + g.centerX.toFixed(0) + " Y: " + g.centerY.toFixed(0)
             )),
           g.buffHolder.update(),
           h.renderer.render(h.stage),
           j++,
           W >= 1e3)
         ) {
           en.playerFps.html(j);
           var b = Date.now();
 
           if (g.serverData.resetType > 0 && g.serverData.resetTime > 0) {
             en.resetInfo.css("display", "block");
             var k = Math.max(0, Math.floor((g.serverData.resetTime - b) / 1e3));
             en.resetTime.html(tQ(k));
           } else en.resetInfo.css("display", "none");
 
           if (g.respawnCooldown > 0 && g.respawnCooldown >= b) {
             en.respawnInfo.css("display", "block");
             var k = Math.max(0, Math.ceil((g.respawnCooldown - b) / 1e3));
             en.respawnCooldown.html(tQ(k));
           } else
             g.respawnCooldown < 0
               ? (en.respawnInfo.css("display", "block"),
                 en.respawnCooldown.html("NEVER"))
               : en.respawnInfo.css("display", "none");
 
           (W = 0), (j = 0);
         }
 
         g.playerRegistry.handleUpdatedPlayers(), requestAnimationFrame(eP);
       }
 
       function eU() {
         eh.cShowBorder && g.serverData.border.enabled
           ? (null != p && (p.parent.removeChild(p), p.destroy(), (p = null)),
             (p = new t.Graphics()).lineStyle(
               em.rBorderSize,
               t.utils.string2hex(tinycolor(em.uiGameBorderColor).toHexString())
             ),
             p.drawRect(
               g.serverData.border.left,
               g.serverData.border.top,
               g.serverData.border.width,
               g.serverData.border.height
             ),
             a.addChild(p),
             (p.visible = true))
           : null != p && (p.parent.removeChild(p), p.destroy(), (p = null));
       }
 
       function eE() {
         ny.consented &&
           ((eh.iChatWidth = $("#chat-panel").css("width")),
           (eh.iChatHeight = $("#chat-panel").css("height")),
           window.localStorage.setItem("options", JSON.stringify(eh)),
           window.localStorage.setItem("keybinds", JSON.stringify(ep)),
           window.localStorage.setItem("name", $("#name-box").val()),
           window.localStorage.setItem("theme", JSON.stringify(em)),
           window.localStorage.setItem("subpanel", JSON.stringify(eb)));
       }
 
       function ex() {
         (this.socket = null),
           (this.currentServer = null),
           (this.currentServerName = null),
           (this.spectate = false),
           (this.name = ""),
           (this.playerId = 0),
           (this.bucket = {}),
           (this.foodObjects = {}),
           (this.myCells = {}),
           (this.playerRegistry = new e0()),
           (this.buffHolder = new tL()),
           (this.centerX = 0),
           (this.centerY = 0),
           (this.centerX_ = 0),
           (this.centerY_ = 0),
           (this.centerSteps = 0),
           (this.scale = 0.5),
           (this.scale_ = 0.5),
           (this.scale_base = 0.5),
           (this.mouseZoom = 1),
           (this.offsetX = 0),
           (this.offsetY = 0),
           (this.mouseRawX = 0),
           (this.mouseRawY = 0),
           (this.mouseX = 0),
           (this.mouseY = 0),
           (this.mouseFrozen = false),
           (this.party = []),
           (this.partyIds = {}),
           (this.subPanelOverride = false),
           (this.serverData = {
             hasSentSubPanel: false,
             border: {},
             maxCells: 16
           }),
           (this.score = 0),
           (this.respawnCooldown = 0),
           (this.customGameMap = null),
           (this.accountListeners = {}),
           this.clearStats(),
           setInterval(this.sendPing.bind(this), 3e4);
       }
 
       function eT(e) {
         (this.id = e),
           (this.type = 0),
           (this.nameCache = null),
           (this.skin = null),
           (this.playerId = 0),
           (this.color = null),
           (this.x = 0),
           (this.y = 0),
           (this.x_ = 0),
           (this.y_ = 0),
           (this.size = 0),
           (this.size_ = 0),
           (this.steps = 0),
           (this.massLastAmount = -1),
           (this.cache = null);
       }
 
       (ex.prototype.clearStats = function () {
         this.stats = {
           name: "An unnamed cell",
           alive: 0,
           eatenFood: 0,
           eatenEject: 0,
           eatenVirus: 0,
           eatenPlayer: 0,
           gainFood: 0,
           gainEject: 0,
           gainVirus: 0,
           gainPlayer: 0
         };
       }),
         (ex.prototype.play = function () {
           if (null == P) {
             this.selfMsg("No server selected!");
             return;
           }
 
           (this.name = $("#name-box").val()),
             (this.spectate = false),
             (this.currentServerName = P.name),
             $("#playerServer").html(this.currentServerName),
             e1(),
             this.isConnected() && this.currentServer == P.ip
               ? this.sendPacket(new v.setName(this.name))
               : this.connect(P.ip),
             t$(),
             tm(E),
             ga("send", "event", "Game", "webMenu", "Play");
         }),
         (ex.prototype.spec = function () {
           if (null == P) {
             this.selfMsg("No server selected!");
             return;
           }
 
           (this.spectate = true),
             e1(),
             this.isConnected() && this.currentServer == P.ip
               ? this.sendPacket(new v.sendSpectate())
               : this.connect(P.ip),
             t$(),
             tm(E),
             ga("send", "event", "Game", "webMenu", "Spectate");
         }),
         (ex.prototype.connect = function (e) {
           if (null != this.socket) {
             (this.socket.nextUrl = e), this.disconnect(e);
             return;
           }
 
           (this.currentServer = e),
             (this.currentServerName = P.name),
             this.selfMsg("Connecting to " + this.currentServerName + "..."),
             1 == P.ssl
               ? (this.socket = new WebSocket("wss://" + e))
               : (this.socket = new WebSocket("ws://" + e)),
             (this.socket.binaryType = "arraybuffer");
           var t = this;
           (this.socket.onopen = this.onConnect.bind(this)),
             (this.socket.onmessage = this.onMessage.bind(this)),
             (this.socket.onclose = function (e) {
               t.reset(),
                 t.selfMsg(
                   "You have been disconnected from the server. Reason: " +
                     ("" === e.reason ? "Unknown" : e.reason)
                 ),
                 null != this.nextUrl && t.connect(this.nextUrl);
             }),
             (this.socket.onerror = function () {
               t.reset(),
                 (this.nextUrl = null),
                 t.selfMsg(
                   "Error connecting to server... Retrying every second."
                 ),
                 setTimeout(function () {
                   false == t.isConnected() && null == t.socket && t.connect(e);
                 }, 1e3);
             }),
             document.body.classList.add("hide-captcha-badge");
         }),
         (ex.prototype.disconnect = function () {
           null != this.socket && this.socket.close();
         }),
         (ex.prototype.clearBuckets = function () {
           for (var e in this.bucket)
             this.bucket[e].onDelete(), delete this.bucket[e];
 
           for (var e in this.foodObjects)
             this.foodObjects[e].onDelete(), delete this.foodObjects[e];
         }),
         (ex.prototype.reset = function () {
           this.clearBuckets(),
             (this.myCells = {}),
             this.playerRegistry.clear(),
             (this.playerId = 0),
             (this.score = 0),
             (this.respawnCooldown = 0),
             (this.customGameMap = null),
             (this.currentServer = null),
             this.clearStats(),
             this.clearParty(),
             this.buffHolder.clearBuffs(),
             (this.serverData.hasSentSubPanel = false),
             (this.serverData.resetType = 0),
             (this.serverData.autosplits = false),
             null != this.socket && (this.socket = null),
             $("#playerId").html(this.playerId),
             this.subPanelOverride && ((this.subPanelOverride = false), eV());
         }),
         (ex.prototype.handleKey = function (e) {
           if (e == ep.kEjectMass)
             (L = true), this.sendPacket(new v.sendEjectMass(true));
           else if (e == ep.kSplit) this.sendPacket(new v.sendKey(17));
           else if (e == ep.kToggleSpec) this.sendPacket(new v.sendKey(18));
           else if (e == ep.kDoubleSplit)
             this.sendPacket(new v.sendKey(17)),
               this.sendPacket(new v.sendKey(17));
           else if (e == ep.kTripleSplit)
             for (var t = 0; t < 3; t++) this.sendPacket(new v.sendKey(17));
           else if (e == ep.kQuadSplit)
             for (var t = 0; t < 4; t++) this.sendPacket(new v.sendKey(17));
           else if (e == ep.kHexaSplit)
             for (var t = 0; t < 6; t++) this.sendPacket(new v.sendKey(17));
           else
             38 == e
               ? ((this.mouseZoom *= 1.05),
                 (this.mouseZoom =
                   g.mouseZoom > 5
                     ? 5
                     : this.mouseZoom < 0.1
                     ? 0.1
                     : this.mouseZoom))
               : 40 == e
               ? ((this.mouseZoom *= 0.95),
                 (this.mouseZoom =
                   g.mouseZoom > 5
                     ? 5
                     : this.mouseZoom < 0.1
                     ? 0.1
                     : this.mouseZoom))
               : e == ep.kFreezeMouse
               ? ((this.mouseFrozen = !this.mouseFrozen),
                 this.mouseFrozen
                   ? en.mouseFrozenDiv.css("display", "block")
                   : en.mouseFrozenDiv.css("display", "none"))
               : e == ep.kContextMenu &&
                 (function (e) {
                   var t,
                     n =
                       i.pivot.x -
                       h.stage.position.x / g.scale +
                       (g.mouseRawX * ec.resolution) / g.scale,
                     s =
                       i.pivot.y -
                       h.stage.position.y / g.scale +
                       (g.mouseRawY * ec.resolution) / g.scale,
                     a = null;
 
                   for (var o in g.bucket)
                     if (!((t = g.bucket[o]).size < 25)) {
                       var r = t.y - t.size,
                         c = t.y + t.size,
                         l = t.x - t.size,
                         d = t.x + t.size;
 
                       if (!(s > c) && !(s < r) && !(n > d) && !(n < l)) {
                         a = t;
                         break;
                       }
                     }
 
                   if (
                     null != a &&
                     0 != a.playerId &&
                     (!e || "canvas" == e.target.id)
                   ) {
                     var p = g.playerRegistry.getPlayer(a.playerId);
                     null != p && th(e, p.name, a.playerId, -1);
                   }
                 })();
         }),
         (ex.prototype.isConnected = function () {
           return null != this.socket && 1 == this.socket.readyState;
         }),
         (ex.prototype.sendPacket = function (e) {
           this.isConnected() && this.socket.send(e);
         }),
         (ex.prototype.onConnect = function () {
           (Z = []),
             Q.execute("6LcycFwUAAAAANrun52k-J1_eNnF9zeLvgfJZSY3", {
               action: "login"
             }).then(function (e) {
               g.sendPacket(new v.sendCaptcha(e)),
                 document.body.classList.add("hide-captcha-badge"),
                 g.spectate ? g.spec() : g.play();
             }),
             this.sendPacket(new v.connectionStart()),
             this.sendPing(),
             this.sendOptions(),
             null !== firebase.auth().currentUser
               ? firebase
                   .auth()
                   .currentUser.getIdToken(true)
                   .then((e) => {
                     g.sendPacket(new v.sendAuthToken(e));
                   })
                   .catch((e) => e8(e, true))
               : this.spectate
               ? this.sendPacket(new v.sendSpectate())
               : this.sendPacket(new v.setName(this.name));
         }),
         (ex.prototype.sendPing = function () {
           this.isConnected() &&
             ((C = +new Date()), this.sendPacket(new v.sendPing()));
         }),
         (ex.prototype.sendOptions = function () {
           this.isConnected() && this.sendPacket(new v.sendOptions());
         }),
         (ex.prototype.selfMsg = function (e) {
           var t = document.createElement("td"),
             n = document.createElement("span");
           (n.style.color = "#DDDD00"),
             (n.innerHTML = "[System] " + tp(e)),
             t.appendChild(n),
             e9(nh.SYSTEM, t);
         }),
         (ex.prototype.selfMsgWithJoinCode = function (e, t) {
           var n = document.createElement("td"),
             s = document.createElement("span");
           (s.style.color = "#DDDD00"),
             (s.innerHTML = "[System] " + tp(e)),
             n.appendChild(s);
           var a = document.createElement("span");
           (a.style.color = "#DDDD00"),
             (a.innerHTML = t),
             (a.style.pointerEvents = "all"),
             (a.style.userSelect = "all"),
             n.appendChild(a),
             e9(nh.SYSTEM, n);
         }),
         (ex.prototype.clearParty = function () {
           (this.party = []),
             (this.partyIds = {}),
             (this.partyLeader = -1),
             (this.partyIndex = -1),
             $("#party-panel").css("display", "none"),
             "block" == B.css("display") && this.handleCustomGameLeave(),
             (null != this.partyCode || null != F) &&
               ((this.partyCode = F = null),
               window.history.pushState("page", "", " "));
         }),
         (ex.prototype.isPartyLeader = function () {
           return this.partyLeader == this.playerId;
         }),
         (ex.prototype.getServerMaxCells = function () {
           return this.serverData.maxCells + this.buffHolder.bonusMaxCells;
         }),
         (ex.prototype.onMessage = function (e) {
           var t = new DataView(e.data),
             n = t.getUint8(0);
 
           switch (((t.offset = 1), n)) {
             case 2:
               this.handleUpdate(t);
               break;
 
             case 10:
               this.handlePosition(t);
               break;
 
             case 21:
               this.handleStats(t);
               break;
 
             case 22:
               this.showSubPanel(t);
               break;
 
             case 23:
               this.updateSubPanel(t);
               break;
 
             case 40:
               this.handleInvite(t);
               break;
 
             case 41:
               this.handlePartyInfo(t);
               break;
 
             case 45:
               this.handlePartyData(t);
               break;
 
             case 43:
               this.handlePartyJoinCode(t);
               break;
 
             case 49:
               this.handleLeaderboard(t);
               break;
 
             case 50:
               this.handleLeaderboardCustom(t);
               break;
 
             case 63:
               this.handleRespawnCooldown(t);
               break;
 
             case 64:
               this.handleMapData(t);
               break;
 
             case 65:
               this.handleClearNodes();
               break;
 
             case 66:
               this.handleUpdateBorder(t);
               break;
 
             case 68:
               this.handleResetTime(t);
               break;
 
             case 69:
               this.handleSpectators(t);
               break;
 
             case 70:
               this.handleSystemMsg(t);
               break;
 
             case 71:
               this.handlePing();
               break;
 
             case 72:
               this.handleChat(t);
               break;
 
             case 73:
               this.handleWhisper(t);
               break;
 
             case 80:
               this.handleShowScrimmageMenu();
               break;
 
             case 81:
               this.handleQueueData(t);
               break;
 
             case 82:
               this.handleQueueLeave(t);
               break;
 
             case 83:
               this.handleMatchState(t);
               break;
 
             case 90:
               this.handleScrimmageData(t);
               break;
 
             case 91:
               this.handleCustomGameShow(t);
               break;
 
             case 92:
               this.handleCustomGameUpdate(t);
               break;
 
             case 93:
               this.handleCustomGameLeave();
               break;
 
             case 94:
               this.handleShowCustomGameLobbies(t);
               break;
 
             case 100:
               this.handleAddBuff(t);
               break;
 
             case 101:
               this.handleRemoveBuff(t);
               break;
 
             case 102:
               this.handleClearBuffs(t);
               break;
 
             case 103:
               this.handleAuthenticated(t);
               break;
 
             case 104:
               this.handleProfile(t);
           }
         }),
         (ex.prototype.handleUpdate = function (e) {
           for (;;) {
             var t = e.getUint16(e.offset, true);
             if (((e.offset += 2), 0 == t)) break;
             var n = this.playerRegistry.getPlayer(t),
               s = false;
             null == n ? (n = new eA(t)) : (s = true),
               (n.cellColor =
                 (e.getUint8(e.offset++) << 16) +
                 (e.getUint8(e.offset++) << 8) +
                 e.getUint8(e.offset++)),
               (n.name = eO(e)),
               n.setSkin(eN(e)),
               n.setFlags(e.getUint8(e.offset++)),
               (2 & n.flags) == 2 &&
                 ((n.nameColor =
                   "#" +
                   tq(e.getUint8(e.offset++)) +
                   tq(e.getUint8(e.offset++)) +
                   tq(e.getUint8(e.offset++))),
                 n.parseEffect(e.getUint8(e.offset++)),
                 (n.nameFont = e.getUint8(e.offset++))),
               s ? g.playerRegistry.updatePlayer(n) : g.playerRegistry.add(n);
           }
 
           for (;;) {
             var a,
               t = e.getUint16(e.offset, true);
             if (((e.offset += 2), 0 == t)) break;
             var i = e.getUint8(e.offset++);
 
             if (null == (a = 0 == i ? this.foodObjects[t] : this.bucket[t])) {
               switch (
                 ((a = new eT(t)).setType(i),
                 a.setX(e.getInt16(e.offset, true)),
                 a.setY(e.getInt16(e.offset + 2, true)),
                 (e.offset += 4),
                 i)
               ) {
                 case 0:
                   a.color = t6(a.id);
                   break;
 
                 case 1:
                   a.setSize(e.getUint16(e.offset, true)),
                     (e.offset += 2),
                     (a.parsedColor =
                       "#" +
                       tq(e.getUint8(e.offset)) +
                       tq(e.getUint8(e.offset + 1)) +
                       tq(e.getUint8(e.offset + 2))),
                     (a.color =
                       (e.getUint8(e.offset++) << 16) +
                       (e.getUint8(e.offset++) << 8) +
                       e.getUint8(e.offset++)),
                     (a.skin = e.getUint8(e.offset++) - 1);
                   break;
 
                 case 2:
                   a.setSize(e.getUint16(e.offset, true)),
                     (e.offset += 2),
                     (a.playerId = e.getUint16(e.offset, true)),
                     (e.offset += 2);
                   break;
 
                 case 3:
                 case 4:
                   a.setSize(e.getUint16(e.offset, true)), (e.offset += 2);
                   break;
 
                 case 5:
                   a.setSize(40), (a.buff = e.getUint8(e.offset++));
               }
 
               a.onCreate(),
                 0 == i ? (this.foodObjects[t] = a) : (this.bucket[t] = a),
                 a.playerId == this.playerId && (this.myCells[t] = a);
             } else {
               switch (
                 (a.updateX(e.getInt16(e.offset, true)),
                 a.updateY(e.getInt16(e.offset + 2, true)),
                 (e.offset += 4),
                 i)
               ) {
                 case 0:
                   break;
 
                 case 1:
                   (a.size_ = e.getUint16(e.offset, true)),
                     (e.offset += 2),
                     (e.offset += 4);
                   break;
 
                 case 2:
                   (a.size_ = e.getUint16(e.offset, true)),
                     (e.offset += 2),
                     (e.offset += 2);
                   break;
 
                 case 3:
                 case 4:
                   (a.size_ = e.getUint16(e.offset, true)), (e.offset += 2);
                   break;
 
                 case 5:
                   e.offset++;
               }
 
               a.steps = 30;
             }
           }
 
           var o = e.getUint16(e.offset, true);
 
           for (e.offset += 2; o > 0; ) {
             var t = e.getUint16(e.offset, true);
             (e.offset += 2), g.playerRegistry.remove(t), o--;
           }
 
           for (o = e.getUint16(e.offset, true), e.offset += 2; o > 0; ) {
             var t = e.getUint16(e.offset, true);
             e.offset += 2;
             var a = this.bucket[t] || this.foodObjects[t];
             null != a &&
               (0 == a.type ? delete this.foodObjects[t] : delete this.bucket[t],
               a.playerId == this.playerId &&
                 (delete this.myCells[t],
                 0 == Object.keys(this.myCells).length &&
                   (eh.cAutoRespawn
                     ? "none" == $("#main").css("display") && g.play()
                     : ("block" != A.css("display") && tf(E),
                       aiptag.cmd.display.push(function () {
                         aipDisplayTag.refresh("GOT_gota-io_336x280");
                       })))),
               a.onDelete()),
               o--;
           }
 
           this.sortCells();
         }),
         (ex.prototype.handlePosition = function (e) {
           (this.centerX_ = e.getFloat32(e.offset, true)),
             (e.offset += 4),
             (this.centerY_ = e.getFloat32(e.offset, true)),
             (e.offset += 4),
             (this.centerSteps = 30),
             eh.cDisableAutoZoom ||
               (this.scale_base = e.getFloat32(e.offset, true));
         }),
         (ex.prototype.handleRespawnCooldown = function (e) {
           var t = e.getFloat64(e.offset, true);
           this.respawnCooldown = t;
         }),
         (ex.prototype.handleMapData = function (e) {
           (this.playerId = e.getUint16(e.offset, true)),
             (e.offset += 3),
             this.handleUpdateBorder(e),
             (this.serverData.maxCells = e.getUint16(e.offset, true)),
             (e.offset += 2),
             eN(e),
             (this.serverData.autosplits = e.getUint8(e.offset++)),
             $("#playerId").html(g.playerId),
             this.updateCellCounter(0, true),
             null != F && g.sendPacket(new v.sendPartyJoin(F)),
             A.css("display", "none"),
             $("#scrimmage-btn-leave").css("display", "none");
         }),
         (ex.prototype.handleUpdateBorder = function (e) {
           (this.serverData.border = {}),
             (this.serverData.border.left = e.getInt16(e.offset, true)),
             (this.serverData.border.top = e.getInt16(e.offset + 2, true)),
             (this.serverData.border.right = e.getInt16(e.offset + 4, true)),
             (this.serverData.border.bottom = e.getInt16(e.offset + 6, true)),
             (e.offset += 8),
             (this.serverData.border.width =
               this.serverData.border.right - this.serverData.border.left),
             (this.serverData.border.height =
               this.serverData.border.bottom - this.serverData.border.top),
             (this.serverData.border.enabled =
               0 != this.serverData.border.width &&
               0 != this.serverData.border.height),
             eU();
         }),
         (ex.prototype.handleResetTime = function (e) {
           var t = e.getUint8(e.offset++),
             n = e.getFloat64(e.offset, true);
           (this.serverData.resetType = t), (this.serverData.resetTime = n);
         }),
         (ex.prototype.handleSpectators = function (e) {
           (this.spectators = e.getUint16(e.offset, true)),
             this.updateSpectators();
         }),
         (ex.prototype.handleClearNodes = function () {
           this.clearBuckets();
         }),
         (ex.prototype.handleLeaderboard = function (e) {
           var t = document.getElementById("leaderboard-canvas"),
             n = t.getContext("2d");
           I.text("Leaderboard");
           var s = e.getUint32(e.offset, true);
           (e.offset += 4),
             (t.width = 200),
             (t.height = 20 * s + 5),
             (n.font = "16px Calibri");
 
           for (var a = 20, i = 0; i < s; i++) {
             var o = e.getUint16(e.offset, true);
             e.offset += 2;
             var r = eO(e) || "An unnamed cell";
             o == this.playerId
               ? (n.fillStyle = em.uiLeaderboardHighlightSelf)
               : null != this.partyIds[o]
               ? (n.fillStyle = em.uiLeaderboardHighlightParty)
               : (n.fillStyle = em.uiForegroundColor),
               n.fillText(i + 1 + ". " + r, 10, a),
               (a += 20);
           }
         }),
         (ex.prototype.handleLeaderboardCustom = function (e) {
           var t = document.getElementById("leaderboard-canvas"),
             n = t.getContext("2d");
           I.html("Leaderboard");
           var s = e.getUint16(e.offset, true),
             a = e.getUint8(e.offset + 2, true);
           e.getUint8(e.offset + 3, true),
             (e.offset += 4),
             (t.width = 200),
             (t.height = 20 * s + 5),
             (n.font = "16px Calibri");
 
           for (var i = 20, o = 0; o < s; o++) {
             var r = eN(e);
             o == a
               ? (n.fillStyle = em.uiLeaderboardHighlightSelf)
               : (n.fillStyle = em.uiForegroundColor),
               n.fillText(r, 5, i),
               (i += 20);
           }
         }),
         (ex.prototype.handlePing = function () {
           var e = +new Date() - C;
           eh.cColoredPing
             ? $("#playerPing").css({
                 color: em.uiForegroundColor
               })
             : e < 100
             ? $("#playerPing").css({
                 color: em.uiGameColorSuccess
               })
             : e < 200
             ? $("#playerPing").css({
                 color: em.uiGameColorWarning
               })
             : $("#playerPing").css({
                 color: em.uiGameColorError
               }),
             $("#playerPing").html(e + "ms");
         }),
         (ex.prototype.handleChat = function (e) {
           var t,
             n = e.getUint8(e.offset++),
             s =
               "rgb(" +
               e.getUint8(e.offset++) +
               "," +
               e.getUint8(e.offset++) +
               "," +
               e.getUint8(e.offset++) +
               ")",
             a = e.getUint8(e.offset++),
             i = e.getUint16(e.offset, true);
 
           if (((e.offset += 2), !Z.includes(i))) {
             var o = eO(e);
             e.getUint8(e.offset++);
             var r = tp(eO(e)) || "An unnamed cell",
               c = tp(eO(e)),
               l = nh.ALL;
 
             switch (n) {
               case 1:
                 (t = "Party"), (l = nh.PARTY);
                 break;
 
               case 2:
                 (t = "Admin"), (l = nh.ADMIN);
                 break;
 
               default:
                 t = "All";
             }
 
             o.length > 0 && tp((t += " - " + o));
             var d = document.createElement("td"),
               h = document.createElement("span");
             (h.innerHTML = "[" + t + "] "), d.appendChild(h);
             var p = document.createElement("span");
             (p.innerText = r),
               (p.dataset.playerId = i),
               (p.style.color = s),
               (p.className = "chat-name"),
               (p.oncontextmenu = tl),
               d.appendChild(p);
             var u = document.createElement("span");
             if (((u.style.color = tY[a]), 0 == a)) u.innerHTML = ": " + tx(c);
             else {
               var f = document.createElement("span");
               (f.innerHTML = ": "), d.appendChild(f), (u.innerHTML = tx(c));
             }
             d.appendChild(u), e9(l, d);
           }
         }),
         (ex.prototype.handleWhisper = function (e) {
           var t = tp(eO(e)) || "An unnamed cell",
             n = e.getUint16(e.offset, true);
 
           if (((e.offset += 2), !Z.includes(n))) {
             var s =
                 "rgb(" +
                 e.getUint8(e.offset++) +
                 "," +
                 e.getUint8(e.offset++) +
                 "," +
                 e.getUint8(e.offset++) +
                 ")",
               a = tp(eO(e)) || "An unnamed cell",
               i = e.getUint16(e.offset, true);
             e.offset += 2;
             var o =
                 "rgb(" +
                 e.getUint8(e.offset++) +
                 "," +
                 e.getUint8(e.offset++) +
                 "," +
                 e.getUint8(e.offset++) +
                 ")",
               r = tp(eO(e)),
               c = document.createElement("td"),
               l = document.createElement("span");
             (l.innerText = t),
               (l.dataset.playerId = n),
               (l.style.color = s),
               (l.className = "chat-name"),
               (l.oncontextmenu = tl),
               c.appendChild(l);
             var d = document.createElement("span");
             (d.innerHTML = " > "), c.appendChild(d);
             var h = document.createElement("span");
             (h.innerText = a),
               (h.dataset.playerId = i),
               (h.style.color = o),
               (h.className = "chat-name"),
               (h.oncontextmenu = tl),
               c.appendChild(h);
             var p = document.createElement("span");
             (p.innerHTML = ": " + tx(r)), c.appendChild(p), e9(nh.WHISPER, c);
           }
         }),
         (ex.prototype.handleSystemMsg = function (e) {
           var t = eO(e);
           this.selfMsg(t);
         }),
         (ex.prototype.handleAuthenticated = function (e) {
           var t = e.getUint8(1);
 
           switch (t) {
             case nl.SUCCESS:
               break;
 
             case nl.FAILURE:
               this.selfMsg(
                 "Invalid authentication token! Please logout and try again!"
               );
           }
 
           this.spectate
             ? this.sendPacket(new v.sendSpectate())
             : this.sendPacket(new v.setName(this.name));
         }),
         (ex.prototype.handleProfile = function (e) {
           e3(JSON.parse(eN(e)));
         }),
         (ex.prototype.handleInvite = function (e) {
           if (eh.cAutoDecline) g.sendPacket(new v.sendInviteResponse(false));
           else {
             var t = tp(eO(e));
             (document.getElementById("popup-party-text").innerText =
               t + " has invited you to a party."),
               tf($("#popup-party"));
           }
         }),
         (ex.prototype.handlePartyInfo = function (e) {
           var t = {},
             n = [],
             s = -1,
             a = e.getUint16(e.offset, true);
           e.offset += 2;
 
           for (var i = 0; i < a; i++) {
             var o = {},
               r = e.getUint8(e.offset++);
 
             if (
               ((o.id = e.getUint16(e.offset, true)),
               (t[o.id] = i),
               (e.offset += 2),
               1 == r ? ((s = o.id), (o.isLeader = true)) : (o.isLeader = false),
               (o.name = eO(e) || "An unnamed cell"),
               (o.x = 0),
               (o.y = 0),
               (o.x_ = 0),
               (o.y_ = 0),
               (o.score = 0),
               (o.cache = -1),
               (o.team = 0),
               (o.state = np.UNKNOWN),
               null != this.partyIds[o.id])
             ) {
               var c = this.party[this.partyIds[o.id]];
               (o.x = c.x),
                 (o.y = c.y),
                 (o.x_ = c.x_),
                 (o.y_ = c.y_),
                 (o.state = c.state),
                 (o.score = c.score),
                 (o.cache = c.cache),
                 (o.mmColor = c.mmColor);
             } else o.mmColor = tR(o.id);
 
             n.push(o);
           }
 
           (this.party = n),
             (this.partyIds = t),
             this.partyLeader != s &&
               ((this.partyLeader = s),
               "block" == B.css("display") && ScrimmageHelper.checkLeader()),
             a > 0 ? this.drawParty() : this.clearParty();
         }),
         (ex.prototype.handlePartyData = function (e) {
           var t = e.getUint16(e.offset, true);
 
           if (((e.offset += 2), t == this.party.length)) {
             for (var n = 0; n < t; n++) {
               var s = this.party[n];
               (s.state = e.getUint8(e.offset++)),
                 s.state === np.ALIVE &&
                   ((s.x_ = e.getInt16(e.offset, true)),
                   (s.y_ = e.getInt16(e.offset + 2, true)),
                   (s.score = e.getInt32(e.offset + 4, true)),
                   (e.offset += 8));
             }
 
             this.drawParty();
           }
         }),
         (ex.prototype.handlePartyJoinCode = function (e) {
           var t = eN(e);
 
           if (((this.partyCode = eN(e)), 0 != this.partyCode.length)) {
             this.selfMsgWithJoinCode(t, this.partyCode),
               $("#popup-party-code-content input").val(this.partyCode),
               $("#popup-party-code").show();
             var n = "#" + this.currentServerName + "&" + this.partyCode;
             window.history.pushState("page", "", n);
           } else
             this.selfMsg(t),
               (this.partyCode = null),
               window.history.pushState("page", "", " ");
         }),
         (ex.prototype.handleStats = function (e) {
           var t = e.getUint16(e.offset, true);
           (e.offset += 2),
             (this.stats.name = eO(e) || "An unnamed cell"),
             (this.stats.alive += e.getUint32(e.offset, true)),
             (e.offset += 4),
             (this.stats.eatenFood += e.getUint32(e.offset, true)),
             (e.offset += 4),
             (this.stats.eatenEject += e.getUint32(e.offset, true)),
             (e.offset += 4),
             (this.stats.eatenVirus += e.getUint32(e.offset, true)),
             (e.offset += 4),
             (this.stats.eatenPlayer += e.getUint32(e.offset, true)),
             (e.offset += 4),
             (this.stats.gainFood += e.getUint32(e.offset, true)),
             (e.offset += 4),
             (this.stats.gainEject += e.getUint32(e.offset, true)),
             (e.offset += 4),
             (this.stats.gainVirus += e.getUint32(e.offset, true)),
             (e.offset += 4),
             (this.stats.gainPlayer += e.getUint32(e.offset, true)),
             (e.offset += 4);
           var n = $("#main-stats");
           n.empty(),
             n.append(
               "<span>Name: " + this.stats.name + " (" + t + ")</span><br>"
             ),
             n.append("<span>Alive: " + tQ(this.stats.alive) + "</span><br>"),
             n.append(
               "<span>Food eaten: " +
                 this.stats.eatenFood +
                 " (" +
                 this.stats.gainFood +
                 ")</span><br>"
             ),
             n.append(
               "<span>Ejected mass eaten: " +
                 this.stats.eatenEject +
                 " (" +
                 this.stats.gainEject +
                 ")</span><br>"
             ),
             n.append(
               "<span>Viruses eaten: " +
                 this.stats.eatenVirus +
                 " (" +
                 this.stats.gainVirus +
                 ")</span><br>"
             ),
             n.append(
               "<span>Player cells eaten: " +
                 this.stats.eatenPlayer +
                 " (" +
                 this.stats.gainPlayer +
                 ")</span><br>"
             );
         }),
         (ex.prototype.showSubPanel = function (e) {
           var t = 1 == e.getUint8(e.offset++);
           (this.subPanelOverride = t),
             eV(),
             t &&
               (this.serverData.hasSentSubPanel ||
                 (e7(), (this.serverData.hasSentSubPanel = true)),
               document.body.classList.add("hide-captcha-badge"));
         }),
         (ex.prototype.updateSubPanel = function () {
           V && eK(V.uid);
         }),
         (ex.prototype.updateSpectators = function () {
           en.spectatorCount.html(this.spectators);
         }),
         (ex.prototype.handleAddBuff = function (e) {
           var t = e.getUint8(e.offset++),
             n = e.getUint8(e.offset++),
             s = e.getFloat64(e.offset, true);
           (e.offset += 8), this.buffHolder.onAddBuff(t, n, s);
         }),
         (ex.prototype.handleRemoveBuff = function (e) {
           var t = e.getUint8(e.offset++);
           this.buffHolder.onRemoveBuff(t);
         }),
         (ex.prototype.handleClearBuffs = function (e) {
           var t = 1 == e.getUint8(e.offset++);
           this.buffHolder.clearBuffs(t);
         }),
         (ex.prototype.sortCells = function () {
           r.children.sort(function (e, t) {
             return e.parentCell.size - t.parentCell.size;
           }),
             this.updateScorePanel();
         }),
         (ex.prototype.updateScorePanel = function () {
           var e = 0,
             t = 0;
 
           for (var n in this.myCells) (e += this.myCells[n].getRealMass()), t++;
 
           e > this.score &&
             ((this.score = e),
             en.playerScore.html(this.score.toLocaleString())),
             this.updateCellCounter(t);
         }),
         (ex.prototype.updateCellCounter = function (e, t) {
           if (en.playerCellCount != e || t) {
             if (
               ((en.playerCellCount = e),
               en.playerCells.html(e + "/" + this.getServerMaxCells()),
               eh.cColoredCellCount)
             )
               en.playerCells.css({
                 color: em.uiForegroundColor
               });
             else {
               var n = e / this.getServerMaxCells();
               n >= 1
                 ? en.playerCells.css({
                     color: em.uiGameColorError
                   })
                 : n >= 0.5
                 ? en.playerCells.css({
                     color: em.uiGameColorWarning
                   })
                 : en.playerCells.css({
                     color: em.uiGameColorSuccess
                   });
             }
           }
         }),
         (ex.prototype.drawParty = function () {
           if (0 != this.party.length) {
             eh.cHidePartyPanel
               ? en.partyPanel.css("display", "none")
               : "none" == en.partyPanel.css("display") &&
                 "none" != T.css("display") &&
                 en.partyPanel.css("display", "block");
             var e = document.getElementById("party-canvas"),
               t = e.getContext("2d");
             t.font = "16px Calibri";
 
             for (var n = 0, s = 0, a = 0, i = 0; i < this.party.length; i++) {
               var o = this.party[i];
               -1 == o.cache &&
                 (o.cache = t.measureText(i + 1 + ". " + o.name).width),
                 o.cache > n && (n = o.cache),
                 o.state === np.ALIVE || o.state === np.UNKNOWN
                   ? ((o.scoreText = o.score.toLocaleString()), (a += o.score))
                   : o.state === np.DEAD
                   ? (o.scoreText = "DEAD")
                   : o.state === np.SPECTATE && (o.scoreText = "SPEC");
               var r = t.measureText(o.scoreText).width;
               r > s && (s = r);
             }
 
             var c = a.toLocaleString();
             (s = Math.max(s, t.measureText(c).width)),
               (e.width = 15 + n + 50 + s),
               (e.height =
                 20 * this.party.length + 5 + (this.party.length > 1 ? 20 : 0)),
               (t.font = "16px Calibri");
 
             for (
               var l = 20, d = 5 + n + 50, i = 0;
               i < this.party.length;
               i++
             ) {
               var o = this.party[i];
               (t.fillStyle = o.isLeader
                 ? em.uiPartyLeaderColor
                 : em.uiForegroundColor),
                 t.fillText(i + 1 + ". " + o.name, 5, l),
                 t.fillText(o.scoreText, d, l),
                 (l += 20);
             }
 
             this.party.length > 1 &&
               ((t.fillStyle = em.uiForegroundColor),
               t.fillText("Total:", 5, l),
               t.fillText(c, d, l));
           }
         }),
         (ex.prototype.handleShowScrimmageMenu = function () {
           E.stop(true, false),
             E.css("display", "none"),
             A.css("display", "block"),
             $("#scrimmage-btn-leave").css("display", "none"),
             (g.serverData.border.enabled = false);
         }),
         (ex.prototype.handleQueueData = function (e) {
           var t = eN(e),
             n = e.getUint32(e.offset, true);
           e.offset += 4;
           var s = e.offset < e.byteLength ? e.getUint8(e.offset) : -1,
             a = document.getElementById("leaderboard-canvas"),
             i = a.getContext("2d");
           I.html("Queue"),
             (a.width = 200),
             (a.height = 20 * (2 + (-1 != s ? 1 : 0)) + 5),
             (i.font = "16px Calibri");
           var o = 20;
           (i.fillStyle = em.uiForegroundColor),
             i.fillText("Mode: " + t, 5, o),
             (o += 20),
             i.fillText("Time: " + tQ(n), 5, o),
             -1 != s && ((o += 20), i.fillText("Queued players: " + s, 5, o));
         }),
         (ex.prototype.handleQueueLeave = function (e) {
           var t = eN(e),
             n = document.getElementById("leaderboard-canvas");
           n.getContext("2d"),
             (n.width = 0),
             (n.height = 0),
             this.selfMsg("You have left the queue for [" + t + "]");
         }),
         (ex.prototype.handleMatchState = function (e) {
           var t = 1 == e.byteLength ? 0 : e.getUint8(e.offset++);
           0 == t
             ? (this.selfMsg("A match has been found. Good luck and have fun!"),
               !ee &&
                 "Notification" in window &&
                 "granted" === Notification.permission &&
                 new Notification("Your match has started.", {
                   icon: "https://gota.io/assets/images/favicon.png"
                 }))
             : 1 == t && $("#scrimmage-btn-leave").css("display", "block");
         }),
         (ex.prototype.handleScrimmageData = function (e) {
           var t = e.getUint8(e.offset++),
             n = $("#scrimmage-mode-select"),
             s = $("#scrimmage-mode-info"),
             a = parseInt(n.val());
           n.empty(), s.empty();
 
           for (var i = {}; t > 0; ) {
             var o = e.getUint8(e.offset++),
               r = eN(e),
               c = eN(e),
               l = document.createElement("option");
             (l.innerHTML = r),
               (l.value = o),
               n.append(l),
               ((l = document.createElement("div")).innerHTML = c),
               (l.id = "scrimmage-info-" + o),
               (l.style.display = "none"),
               s.append(l),
               (i[o] = true),
               t--;
           }
 
           if (
             ((O = {
               modes: {},
               sizes: {},
               maps: []
             }),
             e.byteLength - 1 > e.offset)
           ) {
             for (t = e.getUint8(e.offset++); t > 0; ) {
               var o = e.getUint8(e.offset++),
                 r = eN(e);
               (O.modes[o] = {
                 id: o,
                 name: r
               }),
                 t--;
             }
 
             for (t = e.getUint8(e.offset++); t > 0; ) {
               var o = e.getUint8(e.offset++),
                 r = eN(e);
               (O.sizes[o] = {
                 id: o,
                 name: r
               }),
                 t--;
             }
 
             for (t = e.getUint8(e.offset++); t > 0; ) {
               for (
                 var r = eN(e),
                   d = {
                     name: r,
                     startmass: 0,
                     teams: 0,
                     modes: [],
                     sizes: []
                   },
                   h = e.getUint8(e.offset++);
                 h > 0;
 
               )
                 d.modes.push(e.getUint8(e.offset++)), h--;
 
               for (var h = e.getUint8(e.offset++); h > 0; )
                 d.sizes.push(e.getUint8(e.offset++)), h--;
 
               (d.startmass = e.getUint16(e.offset, true)),
                 (e.offset += 2),
                 (d.respawnDelay = e.getInt16(e.offset, true)),
                 (e.offset += 2),
                 (d.teams = e.getUint8(e.offset++)),
                 O.maps.push(d),
                 t--;
             }
           }
 
           $("#scrimmage-custom-btn-container").css(
             "display",
             0 == O.maps.length ? "none" : "block"
           ),
             $("#scrimmage-map").empty();
 
           for (var h = 0; h < O.maps.length; h++)
             $("#scrimmage-map").append(
               "<option value='" + h + "'>" + O.maps[h].name + "</option>"
             );
 
           null != i[a]
             ? (n.val(a), n.trigger("change"))
             : (n.prop("selectedIndex", 0), n.trigger("change"));
         }),
         (ex.prototype.handleCustomGameUpdate = function (e) {
           var t = e.getUint8(e.offset++);
 
           switch (t) {
             case nr.MAP:
               ScrimmageHelper.updateMap(e.getUint8(e.offset++));
               break;
 
             case nr.MODE:
               ScrimmageHelper.updateMode(e.getUint8(e.offset++));
               break;
 
             case nr.SIZE:
               ScrimmageHelper.updateSize(e.getUint8(e.offset++));
               break;
 
             case nr.STARTMASS:
               ScrimmageHelper.updateStartMass(e.getUint16(e.offset, true)),
                 (e.offset += 2);
               break;
 
             case nr.LOCK:
               ScrimmageHelper.updateLock(1 === e.getUint8(e.offset++));
               break;
 
             case nr.PLAYER_UPDATE:
               var n = e.getUint8(e.offset++),
                 s = e.getUint8(e.offset++);
               (g.party[n].team = s), ScrimmageHelper.updatePlayerById(n);
               break;
 
             case nr.PLAYER_LIST:
               for (var a = e.getUint8(e.offset++), n = 0; a > 0; )
                 (g.party[n].team = e.getUint8(e.offset++)), a--, n++;
 
               ScrimmageHelper.updatePlayers();
               break;
 
             case nr.VIRUS_DENSITY:
               ScrimmageHelper.updateVirusDensity(e.getUint16(e.offset, true)),
                 (e.offset += 2);
               break;
 
             case nr.RESPAWN_DELAY:
               ScrimmageHelper.updateRespawnDelay(e.getInt16(e.offset, true)),
                 (e.offset += 2);
               break;
 
             case nr.AUTOSPLIT:
               ScrimmageHelper.updateAutoSplit(1 === e.getUint8(e.offset++));
               break;
 
             case nr.PUBLIC:
               ScrimmageHelper.updatePublic(1 === e.getUint8(e.offset++));
               break;
 
             case nr.PASSWORD:
               ScrimmageHelper.updatePassword(1 === e.getUint8(e.offset++));
               break;
 
             case nr.NAME:
               ScrimmageHelper.updateName(eO(e));
           }
         }),
         (ex.prototype.handleCustomGameShow = function (e) {
           $(".scrimmage-full").css("display", "none"),
             $("#scrimmage-custom").css("display", "block");
           var t = eO(e),
             n = e.getUint8(e.offset++),
             s = e.getUint8(e.offset++),
             a = e.getUint8(e.offset++),
             i = e.getUint16(e.offset, true);
           e.offset += 2;
           var o = e.getUint16(e.offset, true);
           e.offset += 2;
           var r = e.getInt16(e.offset, true);
           e.offset += 2;
 
           for (
             var c = 1 === e.getUint8(e.offset++),
               l = 1 === e.getUint8(e.offset++),
               d = 1 === e.getUint8(e.offset++),
               h = 1 === e.getUint8(e.offset++),
               p = e.getUint8(e.offset++),
               u = 0;
             p > 0;
 
           )
             (g.party[u].team = e.getUint8(e.offset++)), p--, u++;
 
           ScrimmageHelper.updateName(t),
             ScrimmageHelper.updateMap(n),
             ScrimmageHelper.updateMode(s),
             ScrimmageHelper.updateSize(a),
             ScrimmageHelper.updateStartMass(i),
             ScrimmageHelper.updateVirusDensity(o),
             ScrimmageHelper.updateLock(l),
             ScrimmageHelper.updateRespawnDelay(r),
             ScrimmageHelper.updateAutoSplit(c),
             ScrimmageHelper.updatePublic(d),
             ScrimmageHelper.updatePassword(h),
             ScrimmageHelper.updatePlayers(),
             ScrimmageHelper.checkLeader();
         }),
         (ex.prototype.handleCustomGameLeave = function () {
           $(".scrimmage-full").css("display", "none"),
             $("#scrimmage-menu").css("display", "block");
         }),
         (ex.prototype.handleShowCustomGameLobbies = function (e) {
           $(".scrimmage-full").css("display", "none"),
             $("#scrimmage-lobbies").css("display", "block"),
             (R = {});
           var t = $("#scrimmage-lobbies-tbody");
 
           for (t.empty(); ; ) {
             var n = e.getUint32(e.offset, true);
             if (((e.offset += 4), 0 == n)) break;
             var s = {};
             (s.id = n),
               (s.name = eO(e)),
               (s.leaderId = e.getUint32(e.offset)),
               (e.offset += 4),
               (s.leaderName = eO(e) || "An unnamed cell"),
               (s.map = e.getUint8(e.offset++)),
               (s.mode = e.getUint8(e.offset++)),
               (s.size = e.getUint16(e.offset, true)),
               (e.offset += 2),
               (s.maxSize = e.getUint16(e.offset, true)),
               (e.offset += 2),
               (s.hasPasscode = 1 == e.getUint8(e.offset++)),
               (R[s.id] = s);
             var a = s.hasPasscode ? "<div class='scrimmage-lock'></div>" : "";
             t.append(
               "<tr partyId='" +
                 s.id +
                 "'><td><span>" +
                 a +
                 tp(s.name) +
                 "</span></td><td><span>" +
                 tp(s.leaderName) +
                 "</span></td><td><span>" +
                 O.maps[s.map].name +
                 "</span></td><td><span>" +
                 O.modes[s.mode].name +
                 "</span></td><td><span>" +
                 s.size +
                 "/" +
                 s.maxSize +
                 "</span></td></tr>"
             );
           }
 
           $("#scrimmage-lobbies-tbody tr").on("click", function () {
             $(".custom-game-selected").removeClass("custom-game-selected"),
               (U = $(this).attr("partyId")),
               $(this).addClass("custom-game-selected");
           });
         }),
         (ScrimmageHelper = {
           updateName: function (e) {
             $("#scrimmage-name").text(e);
           },
           updateMap: function (e) {
             $("#scrimmage-map option[value='" + e + "']").prop("selected", true);
             var t = O.maps[e];
             $("#scrimmage-mapmode").empty();
 
             for (var n = 0; n < t.modes.length; n++) {
               var s = O.modes[t.modes[n]];
               $("#scrimmage-mapmode").append(
                 "<option value='" + n + "'>" + s.name + "</option>"
               );
             }
 
             $("#scrimmage-mapsize").empty();
 
             for (var n = 0; n < t.sizes.length; n++) {
               var a = O.sizes[t.sizes[n]];
               $("#scrimmage-mapsize").append(
                 "<option value='" + n + "'>" + a.name + "</option>"
               );
             }
 
             ScrimmageHelper.updateMode(0),
               ScrimmageHelper.updateSize(0),
               ScrimmageHelper.updateStartMass(t.startmass),
               $("#scrimmage-startmass").attr("placeholder", t.startmass),
               ScrimmageHelper.updateRespawnDelay(t.respawnDelay),
               $("#scrimmage-map").attr("data", e),
               (g.customGameMap = t);
           },
           updateMode: function (e) {
             $("#scrimmage-mapmode option[value='" + e + "']").prop(
               "selected",
               true
             ),
               $("#scrimmage-mapmode").attr("data", e);
           },
           updateSize: function (e) {
             $("#scrimmage-mapsize option[value='" + e + "']").prop(
               "selected",
               true
             ),
               $("#scrimmage-mapsize").attr("data", e);
           },
           updateStartMass: function (e) {
             $("#scrimmage-startmass").val(e),
               $("#scrimmage-startmass").attr("data", e);
           },
           updateVirusDensity: function (e) {
             $("#scrimmage-virusDensity").val(e),
               $("#scrimmage-virusDensity").attr("data", e);
           },
           updateRespawnDelay: function (e) {
             $("#scrimmage-respawnDelay").val(e),
               $("#scrimmage-respawnDelay").attr("data", e);
           },
           updateAutoSplit: function (e) {
             $("#scrimmage-autoSplit").prop("checked", e);
           },
           updatePublic: function (e) {
             $("#scrimmage-public").prop("checked", e);
           },
           updatePassword: function (e) {
             $("#scrimmage-password").prop("checked", e);
           },
           updateLock: function (e) {
             $("#scrimmage-lockteams").prop("checked", e),
               ScrimmageHelper.checkLock();
           },
           checkLock: function () {
             $("#scrimmage-lockteams").prop("checked") && !g.isPartyLeader()
               ? $("#cgp-" + g.partyIndex).attr("disabled", "disabled")
               : $("#cgp-" + g.partyIndex).removeAttr("disabled");
           },
           checkLeader: function () {
             g.isPartyLeader()
               ? $(".custom-game").removeAttr("disabled")
               : ($(".custom-game").attr("disabled", "disabled"),
                 ScrimmageHelper.checkLock());
           },
           updatePlayerById: function (e) {
             var t = g.party[e];
             $("#cgp-" + e + " option[value='" + t.team + "']").prop(
               "selected",
               true
             ),
               $("#cgp-name-" + e).text(t.name),
               $("#cgp-name-" + e).css("color", nu[t.team]);
           },
           updatePlayers: function () {
             $("#scrimmage-custom-players").empty();
 
             for (var e = 0; e < g.party.length; e++) {
               var t = g.party[e];
               t.id == g.playerId && (g.partyIndex = e),
                 $("#scrimmage-custom-players").append(
                   "<tr><td><span id='cgp-name-" +
                     e +
                     "'>" +
                     t.name +
                     "</span></td>" +
                     ScrimmageHelper.getTeamOptions(e, g.customGameMap.teams) +
                     "</tr>"
                 ),
                 $("#cgp-" + e + " option[value='" + t.team + "']").prop(
                   "selected",
                   true
                 ),
                 $("#cgp-name-" + e).css("color", nu[t.team]),
                 $("#cgp-" + e).on("change", function () {
                   var t = parseInt($(this).attr("id").match("\\d+")[0]),
                     n = $(this).find("option:selected").val();
                   $(
                     "#cgp-" +
                       e +
                       " option[value='" +
                       $(this).attr("data") +
                       "']"
                   ).prop("selected", true),
                     g.sendPacket(
                       new v.sendCustomGameUpdate(nr.PLAYER_UPDATE, t, n)
                     );
                 });
             }
 
             ScrimmageHelper.checkLeader();
           },
           getTeamOptions: function (e, t) {
             var n = "";
 
             if (null != t && t > 1) {
               n =
                 "<td><select class='custom-game' id='cgp-" +
                 e +
                 "'><option value='0'>Spectator</option>";
 
               for (var s = 1; s <= t; s++)
                 n +=
                   "<option value='" +
                   s +
                   "' class='t" +
                   s +
                   "'>" +
                   nc[s] +
                   "</option>";
 
               n += "</select></td>";
             }
 
             return n;
           }
         }),
         (eT.prototype.setType = function (e) {
           this.type = e;
         }),
         (eT.prototype.setX = function (e) {
           (this.x_ = e), (this.x = e);
         }),
         (eT.prototype.setY = function (e) {
           (this.y_ = e), (this.y = e);
         }),
         (eT.prototype.updateX = function (e) {
           this.x_ = e;
         }),
         (eT.prototype.updateY = function (e) {
           this.y_ = e;
         }),
         (eT.prototype.setSize = function (e) {
           (this.size_ = e), (this.size = e);
         }),
         (eT.prototype.getMass = function () {
           return ((this.size * this.size) / 25) >> 0;
         }),
         (eT.prototype.getRealMass = function () {
           return ((this.size_ * this.size_) / 25) >> 0;
         }),
         (eT.prototype.animate = function (e) {
           (this.x += (this.x_ - this.x) * e),
             (this.y += (this.y_ - this.y) * e),
             (this.size += (this.size_ - this.size) * e),
             this.steps--;
         }),
         (eT.prototype.getSizeCache = function () {
           var e = this.getMass();
 
           if (e != this.massLastAmount || this.massLastAmount < 0) {
             n = 1 == ec.massType ? this.toShortString(e) : e.toString();
 
             for (var n, s = 0, a = 0, i = 0; i < n.length; i++) {
               var o = n.charAt(i),
                 r = eI.getNumber(o);
               (s += r.width - 2), (a = Math.max(r.height, a));
             }
 
             null == this.cache
               ? (this.cache = t.RenderTexture.create(s, a))
               : (s != this.cache.width || a != this.cache.height) &&
                 (this.cache.destroy({
                   children: true,
                   texture: true,
                   baseTexture: true
                 }),
                 (this.cache = t.RenderTexture.create(s, a)));
 
             for (var c = eI.cacheContainer, l = 0, i = 0; i < n.length; i++) {
               var o = n.charAt(i),
                 r = eI.getSizeCacheSprite();
               (r.texture = eI.getNumber(o).texture),
                 (r.position.x = l),
                 c.addChild(r),
                 (l += r.width - 2);
             }
 
             h.renderer.render(c, this.cache, true),
               eI.clearCacheContainer(),
               (this.massLastAmount = e);
           }
 
           return this.cache;
         }),
         (eT.prototype.toShortString = function (e) {
           if (e < 1e3);
           else {
             if (e < 1e6) {
               var t = Math.floor(e / 100) / 10;
               return t.toFixed(1) + "K";
             }
 
             if (e < 1e9) {
               var t = Math.floor(e / 1e5) / 10;
               return t.toFixed(1) + "M";
             }
 
             if (e >= 1e9) {
               var t = Math.floor(e / 1e8) / 10;
               return t.toFixed(1) + "B";
             }
           }
           return e.toString();
         });
       let eI = new (function () {
         (this.cache = {}),
           (this.cacheContainer = new t.Container()),
           (this.sprites = []),
           (this.spritesIndex = 0),
           (this.getNumber = function (e) {
             return this.cache[e];
           }),
           (this.clearCacheContainer = function () {
             for (; this.cacheContainer.children[0]; )
               this.cacheContainer.removeChild(this.cacheContainer.children[0]);
 
             this.spritesIndex = 0;
           }),
           (this.getSizeCacheSprite = function () {
             for (; this.spritesIndex >= this.sprites.length; )
               this.sprites.push(new t.Sprite());
 
             return this.sprites[this.spritesIndex++];
           }),
           (this.buildSizeCache = function () {
             for (var e of [
               "0",
               "1",
               "2",
               "3",
               "4",
               "5",
               "6",
               "7",
               "8",
               "9",
               ".",
               "K",
               "B",
               "T"
             ]) {
               var n = new t.Text(e, {
                 fontFamily: "Verdana",
                 fontWeight: "bold",
                 fontSize: 54,
                 fill: "#fff",
                 stroke: "black",
                 strokeThickness: ec.textOutlineSize
               });
               this.cache[e] = n;
             }
           });
       })();
 
       function e0() {
         (this.bucket = {}),
           this.defaultData,
           (this.updatedPlayers = []),
           (this.init = function () {
             (this.defaultData = new eA(0)),
               (this.defaultData.name = ""),
               (this.defaultData.cellColor = 11184810);
           }),
           (this.add = function (e) {
             this.bucket[e.id] = e;
           }),
           (this.remove = function (e) {
             this.bucket[e].onDelete(), delete this.bucket[e];
           }),
           (this.clear = function () {
             for (var e in this.bucket) this.remove(e);
           }),
           (this.getPlayer = function (e) {
             return this.bucket[e];
           }),
           (this.getPlayerById = function (e) {
             var t = this.bucket[e];
             return null != t ? t : this.defaultData;
           }),
           (this.updatePlayer = function (e) {
             (e.cacheUpdate = true), this.updatedPlayers.push(e);
           }),
           (this.handleUpdatedPlayers = function () {
             for (; this.updatedPlayers.length > 0; )
               this.updatedPlayers.shift().cacheUpdate = false;
           }),
           this.init();
       }
 
       function eA(e) {
         (this.id = e),
           this.name,
           this.skin,
           this.skinCache,
           this.cellColor,
           (this.nameColor = "#fff"),
           (this.flags = 0),
           (this.effect = 0),
           (this.nameFont = 0),
           (this.lowerName = false),
           (this.nameCache = null),
           (this.cacheUpdate = false),
           (this.spiked = 0),
           (this.setFlags = function (e) {
             (this.flags = e),
               (8 & this.flags) == 8
                 ? (this.spiked = 1)
                 : (16 & this.flags) == 16
                 ? (this.spiked = 2)
                 : (this.spiked = 0);
           }),
           (this.parseEffect = function (e) {
             e >= 64
               ? ((e -= 64), (this.lowerName = true))
               : (this.lowerName = false),
               (this.effect = e);
           }),
           (this.getNameCache = function (e) {
             if (e || null == this.nameCache) {
               var n,
                 s,
                 a,
                 i = (n = this.nameFont) > 0 && nm[n] ? nm[n] : ng;
               i == ng
                 ? ((s = "bold"), (a = ec.textOutlineSize))
                 : ((s = "normal"), (a = 9)),
                 this.nameCache
                   ? ((this.nameCache.text = this.name),
                     (this.nameCache.style.fontFamily = i.font),
                     (this.nameCache.style.stroke = i.outlineColor),
                     (this.nameCache.style.fontWeight = s),
                     (this.nameCache.style.fontSize = i.size),
                     (this.nameCache.style.fill = this.nameColor),
                     this.nameCache.updateText())
                   : (this.nameCache = new t.Text(this.name, {
                       fontFamily: i.font,
                       fontWeight: s,
                       fontSize: i.size,
                       fill: this.nameColor,
                       stroke: i.outlineColor,
                       strokeThickness: a
                     })),
                 this.nameCache.width;
             }
 
             return this.nameCache;
           }),
           (this.setSkin = function (e) {
             0 == e.length
               ? ((this.skin = null), (this.skinCache = null))
               : e !== this.skin && ((this.skin = e), (this.skinCache = null));
           }),
           (this.getSkin = function () {
             if (null != this.skinCache) return this.skinCache;
 
             if (null != this.skin) {
               if (k[this.skin]) {
                 if (k[this.skin] == nd.LOADED)
                   return (this.skinCache = b[this.skin]), this.skinCache;
                 k[this.skin] == nd.ERROR && (this.skin = null);
               } else if (
                 ((k[this.skin] = nd.LOADING), this.skin.endsWith(".gif"))
               ) {
                 var e = this.skin;
                 gifFrames({
                   url: e,
                   frames: "all",
                   cumulative: false,
                   outputType: "canvas"
                 })
                   .then(function (t) {
                     var n = new t8();
                     n.loadFromFrameData(t), (k[e] = nd.LOADED), (b[e] = n);
                   })
                   .catch(function () {
                     this.skin = null;
                   });
               } else {
                 var n = new Image();
                 n.crossOrigin = "";
                 var e = this.skin;
                 n.addEventListener("load", function () {
                   var s = document.createElement("canvas");
                   (s.width = 512), (s.height = 512);
                   var a = s.getContext("2d");
                   a.beginPath(),
                     a.arc(256, 256, 256, 0, et, false),
                     a.closePath(),
                     a.clip(),
                     a.drawImage(n, 0, 0, 512, 512);
                   var i = t.Texture.from(s);
                   (k[e] = nd.LOADED), (b[e] = i);
                 }),
                   n.addEventListener("error", function () {
                     k[e] = nd.ERROR;
                   }),
                   (n.src = e);
               }
             }
 
             return null;
           }),
           (this.onDelete = function () {
             this.nameCache && this.nameCache.destroy();
           });
       }
 
       (eT.prototype.handleFood = function () {
         if (
           ((this.container.visible =
             (g.scale > 0.12 || eh.cDisableAutoFoodHiding) && !eh.cHideFood),
           this.needsPixiUpdate && this.container.visible)
         ) {
           for (; this.container.children[0]; ) {
             var e = this.container.children[0];
             this.container.removeChild(e), e.destroy();
           }
 
           var s = new t.Graphics();
           eh.cThemeEnabled && ey.length > 0
             ? s.beginFill(ey[this.id % ey.length])
             : s.beginFill(this.color),
             s.drawCircle(0, 0, 1),
             s.endFill(),
             s.scale.set(6),
             this.container.addChild(s),
             (this.needsPixiUpdate = false);
         }
 
         this.container.position.set(this.x, this.y);
       }),
         (eT.prototype.handle = function () {
           switch (this.type) {
             case 0:
               break;
 
             case 1:
               if (this.needsPixiUpdate) {
                 if (
                   this.skin >= 0 &&
                   this.skin < tJ.length &&
                   tJ[this.skin].naturalHeight > 0
                 )
                   (this.skinId = this.skin + ":" + this.color),
                     (this.ejectedMassSprite = new t.Sprite(eD.getSkin(this))),
                     this.ejectedMassSprite.anchor.set(0.5),
                     (this.ejectedMassSprite.width = 2 * this.size),
                     (this.ejectedMassSprite.height = 2 * this.size),
                     this.container.addChild(this.ejectedMassSprite);
                 else {
                   var e = new t.Graphics();
                   e.beginFill(this.color),
                     e.drawCircle(0, 0, 8),
                     e.endFill(),
                     e.scale.set(this.size / 8),
                     this.container.addChild(e);
                 }
                 this.needsPixiUpdate = false;
               }
 
               this.container.position.set(this.x, this.y);
               break;
 
             case 2:
               var n = g.playerRegistry.getPlayerById(this.playerId),
                 s = ns.ALL;
 
               if (
                 (g.playerId == this.playerId
                   ? (s = ns.SELF)
                   : null != g.partyIds[this.playerId] && (s = ns.PARTY),
                 this.needsPixiUpdate)
               ) {
                 var e = new t.Graphics();
 
                 if (
                   (e.beginFill(n.cellColor),
                   e.drawCircle(0, 0, 16),
                   e.endFill(),
                   this.container.addChild(e),
                   (this.circle = e),
                   (this.skinsContainer = new t.Container()),
                   this.container.addChild(this.skinsContainer),
                   (this.needsPixiSkinUpdate = true),
                   (this.massSprite = new t.Sprite(t.Texture.EMPTY)),
                   this.container.addChild(this.massSprite),
                   n.name.length > 0)
                 ) {
                   var a = n.getNameCache(n.cacheUpdate);
                   (this.nameSprite = new t.Sprite(a.texture)),
                     (this.nameSprite.visible = false),
                     this.container.addChild(this.nameSprite),
                     (this.nameEffectSprite = new t.Sprite(t.Texture.EMPTY)),
                     this.nameSprite.addChild(this.nameEffectSprite);
                 }
 
                 this.needsPixiUpdate = false;
               }
 
               if (
                 ((this.skinsContainer.visible =
                   ec.levelSkins >= s && 0 == n.spiked),
                 this.skinsContainer.visible)
               ) {
                 var i = n.getSkin();
                 null != i &&
                   (this.needsPixiSkinUpdate &&
                     ((this.skinSprite = new t.Sprite(t.Texture.EMPTY)),
                     this.skinSprite.anchor.set(0.5),
                     (this.skinSprite.width = 32),
                     (this.skinSprite.height = 32),
                     this.skinsContainer.addChild(this.skinSprite),
                     (this.needsPixiSkinUpdate = false)),
                   i.isGif
                     ? (this.skinSprite.texture = i.getTexture())
                     : i !== this.skinSprite.texture &&
                       (this.skinSprite.texture = i));
               }
 
               n.cacheUpdate &&
                 this.nameSprite &&
                 ((this.nameSprite.texture = n.getNameCache(
                   n.cacheUpdate
                 ).texture),
                 this.nameSprite.texture.update());
               var o = 4 / this.size,
                 r = Math.max(o, 0.16) / 2,
                 c = g.scale >= 4 * o || eh.cDisableAutoNameHiding;
 
               if (
                 this.nameSprite &&
                 ((this.nameSprite.visible = ec.levelNames >= s && c),
                 this.nameSprite.visible &&
                   (this.nameSprite.scale.set(r),
                   (this.nameSprite.x = -(this.nameSprite.width / 2)),
                   n.lowerName
                     ? (this.nameSprite.y = 8 - this.nameSprite.height / 2)
                     : (this.nameSprite.y = -(this.nameSprite.height / 2)),
                   1 == n.effect && null != tO[0]))
               ) {
                 var h = tO[0].getTexture();
                 this.nameEffectSprite.scale.set(
                   this.nameSprite.texture.width / h.width,
                   this.nameSprite.texture.height / h.height
                 ),
                   (this.nameEffectSprite.texture = h);
               }
 
               if (
                 eh.cShowMass &&
                 (s <= ns.PARTY || g.serverData.autosplits) &&
                 c
               ) {
                 var p = this.getSizeCache();
                 (this.massSprite.texture = p),
                   this.massSprite.scale.set(r),
                   (this.massSprite.x = -(this.massSprite.width / 2)),
                   null != this.nameSprite && this.nameSprite.visible
                     ? (this.massSprite.y =
                         this.nameSprite.y + this.nameSprite.height)
                     : (this.massSprite.y = -(this.massSprite.height / 2)),
                   (this.massSprite.visible = true);
               } else this.massSprite.visible = false;
 
               (4 & n.flags) == 4
                 ? this.debuffSprite ||
                   ((this.debuffSprite = new t.Sprite(l)),
                   this.debuffSprite.anchor.set(0.5),
                   (this.debuffSprite.width = 44),
                   (this.debuffSprite.height = 44),
                   this.container.addChild(this.debuffSprite))
                 : this.debuffSprite &&
                   (this.debuffSprite.parent.removeChild(this.debuffSprite),
                   this.debuffSprite.destroy(),
                   (this.debuffSprite = null)),
                 (1 & n.flags) == 1
                   ? this.shieldSprite ||
                     ((this.shieldSprite = new t.Sprite(d)),
                     this.shieldSprite.anchor.set(0.5),
                     (this.shieldSprite.width = 44),
                     (this.shieldSprite.height = 44),
                     this.container.addChild(this.shieldSprite))
                   : this.shieldSprite &&
                     (this.shieldSprite.parent.removeChild(this.shieldSprite),
                     this.shieldSprite.destroy(),
                     (this.shieldSprite = null)),
                 this.container.scale.set(this.size / 16),
                 this.container.position.set(this.x, this.y);
               break;
 
             case 3:
               this.needsPixiUpdate &&
                 (this.sprite ||
                   ((this.sprite = new t.Sprite()),
                   this.sprite.anchor.set(0.5),
                   (this.sprite.width = 128),
                   (this.sprite.height = 128),
                   this.container.addChild(this.sprite)),
                 e$.aCustomSpike
                   ? (this.sprite.texture = e$.aCustomSpike)
                   : (this.sprite.texture = _),
                 (this.needsPixiUpdate = false)),
                 this.container.scale.set(this.size / 64),
                 this.container.position.set(this.x, this.y);
               break;
 
             case 4:
               this.needsPixiUpdate &&
                 (this.sprite ||
                   ((this.sprite = new t.Sprite()),
                   this.container.addChild(this.sprite)),
                 e$.aCustomMother
                   ? (this.sprite.texture = e$.aCustomMother)
                   : (this.sprite.texture = w),
                 ei.enabled &&
                 ei.motherCustomEnabled &&
                 !eh.cDisableEventSkins &&
                 !e$.aCustomMother
                   ? ei.motherCustom(this)
                   : this.setDefaultSpriteAnchor(),
                 (this.needsPixiUpdate = false)),
                 !e$.aCustomMother &&
                   ei.enabled &&
                   (this.size >= 100 && !eh.cDisableEventSkins
                     ? (this.sprite.texture = S)
                     : (this.sprite.texture = w)),
                 this.container.scale.set(this.size / 64),
                 this.container.position.set(this.x, this.y);
               break;
 
             case 5:
               this.needsPixiUpdate &&
                 ((this.sprite = new t.Sprite(tA[this.buff].texture)),
                 this.sprite.anchor.set(0.5),
                 (this.sprite.width = 2 * this.size),
                 (this.sprite.height = 2 * this.size),
                 this.container.addChild(this.sprite),
                 (this.needsPixiUpdate = false)),
                 this.container.position.set(this.x, this.y);
           }
         }),
         (eT.prototype.setDefaultSpriteAnchor = function () {
           this.sprite.anchor.set(0.5),
             (this.sprite.width = 128),
             (this.sprite.height = 128);
         }),
         (eT.prototype.onCreate = function () {
           this.container ||
             ((this.container = new t.Container()),
             (this.container.parentCell = this),
             (this.needsPixiUpdate = true),
             0 != this.type
               ? r.addChild(this.container)
               : o.addChild(this.container));
         }),
         (eT.prototype.onDelete = function () {
           eD.onDelete(this),
             this.container &&
               (this.container.parent.removeChild(this.container),
               (this.container.parentCell = null),
               this.container.destroy({
                 children: true
               }),
               (this.container = null)),
             this.cache && (this.cache.destroy(), (this.cache = null));
         });
       let eD = new (function () {
         (this.bucket = {}),
           (this.getSkin = function (e) {
             if (e.skinId)
               return (
                 null == this.bucket[e.skinId]
                   ? (this.bucket[e.skinId] = {
                       count: 1,
                       cache: this.createMaskCache(e)
                     })
                   : (this.bucket[e.skinId].count =
                       this.bucket[e.skinId].count + 1),
                 this.bucket[e.skinId].cache
               );
           }),
           (this.onDelete = function (e) {
             if (
               e.ejectedMassSprite &&
               ((e.ejectedMassSprite.texture = t.Texture.EMPTY),
               null != this.bucket[e.skinId])
             ) {
               var n = this.bucket[e.skinId];
               (n.count = n.count - 1),
                 n.count <= 0 &&
                   (delete this.bucket[e.skinId], n.cache.destroy());
             }
           }),
           (this.createMaskCache = function (e) {
             var n = document.createElement("canvas"),
               s = n.getContext("2d");
             (n.width = 32),
               (n.height = 32),
               s.drawImage(tJ[e.skin], 0, 0, 32, 32),
               (s.globalCompositeOperation = "source-in"),
               (s.fillStyle = e.parsedColor),
               s.rect(0, 0, 32, 32),
               s.fill();
             var a = t.Texture.from(n);
             return (a.cacheAsBitmap = true), a.width, a;
           });
       })();
 
       function eL() {}
 
       function eM(e, t, n) {
         for (var s = 0; s < n.length; s++) t.setUint8(e, n.charCodeAt(s)), e++;
 
         t.setUint8(e, 0);
       }
 
       function eF(e, t, n) {
         for (var s = 0; s < n.length; s++)
           t.setUint16(e, n.charCodeAt(s), true), (e += 2);
 
         t.setUint16(e, 0, true);
       }
 
       function eN(e) {
         for (var t = ""; ; ) {
           var n = e.getUint8(e.offset);
           if ((e.offset++, 0 == n)) break;
           t += String.fromCharCode(n);
         }
 
         return t;
       }
 
       function eO(e) {
         for (var t = ""; ; ) {
           var n = e.getUint16(e.offset, true);
           if (((e.offset += 2), 0 == n)) break;
           t += String.fromCharCode(n);
         }
 
         return t;
       }
 
       function e8(e, t) {
         if ((console.error(e.message, e.code), t))
           switch (e.code) {
             case "auth/user-disabled":
               alert(
                 "This account has been permanently suspended by an administrator."
               );
               break;
 
             case "auth/popup-closed-by-user":
               break;
 
             default:
               alert(e.message + " (" + e.code + ")");
           }
       }
 
       function e6(e, t) {
         var n = "",
           s = "",
           a = "white";
         if (t.flags.STAFF)
           (s = "Gota.io Staff"), (n = "build"), (a = "royalblue");
         else {
           if (!t.flags.VERIFIED) return;
           (s = "Verified Player"), (n = "check_circle");
         }
         var i = document.createElement("i");
         (i.className = "material-icons"),
           (i.id = "user-badge"),
           (i.innerText = n),
           (i.style.color = a),
           $(i).attr("data-balloon", s),
           $(i).attr("data-balloon-pos", "right"),
           $(e).append(i);
       }
 
       function eR(e, t) {
         var n = document.createElement("i");
         return (
           (n.className = "material-icons"),
           (n.innerText = e),
           n.setAttribute("data-balloon", t),
           n.setAttribute("data-balloon-pos", "up"),
           n
         );
       }
 
       function eB(e, t, n, s) {
         var a,
           i = document.createElement("li");
         (i.className = "user-embed menu-sub-bg2"),
           (i.style.backgroundColor = em.uiMenuHeaderBackgroundColor);
         var o = document.createElement("img");
         (o.src = e.avatar), (o.alt = e.username), i.appendChild(o);
         var r = document.createElement("div");
         r.className = "info";
         var c = document.createElement("div");
         (c.className = "username"),
           (c.innerText = e.username),
           r.appendChild(c),
           e6(c, e);
         var l = document.createElement("div"),
           d = false,
           h = null;
         n
           ? ((h = (a = e.presence.server).charAt(0).toUpperCase() + a.slice(1)),
             e.presence.timestamp + 6e4 < new Date().getTime() ||
             void 0 === e.presence.id
               ? ((l.className = "status offline"),
                 (l.innerText = "Not playing on any server"))
               : ((d = true),
                 (l.className =
                   "status " +
                   ("ONLINE" === e.presence.status ? "online" : "spectate")),
                 (l.innerText =
                   ("ONLINE" === e.presence.status
                     ? "Playing "
                     : "Spectating ") +
                   e.presence.gamemode +
                   " on " +
                   h +
                   " (ID " +
                   e.presence.id +
                   ")")))
           : ((l.className = "status pending"),
             (l.innerText = "Pending Friend Request")),
           r.appendChild(l);
         var p = document.createElement("div");
 
         if (
           ((p.className = "actions"),
           c.addEventListener("click", function () {
             e3(e, $("#main-social"));
           }),
           n && d)
         ) {
           var u = eR("input", "Join Server");
           u.addEventListener("click", function () {
             eq(h),
               g.play(),
               g.selfMsg(e.username + "'s ID is " + e.presence.id),
               tm($("#main-social"));
           }),
             p.appendChild(u);
         }
 
         if (!n) {
           var f = eR("done", "Add as Friend");
           (f.isHandlingRequest = false),
             f.addEventListener("click", function () {
               f.isHandlingRequest ||
                 ((f.isHandlingRequest = true),
                 firebase
                   .auth()
                   .currentUser.getIdToken()
                   .then((t) => {
                     fetch(ea + "/api/v1/social/friends", {
                       method: "POST",
                       headers: {
                         "Content-Type": "application/json"
                       },
                       body: JSON.stringify({
                         token: t,
                         target: e.uid,
                         action: 2
                       })
                     })
                       .then((e) => e.json())
                       .then((e) => {
                         200 !== e.code && alert(e.message),
                           (f.isHandlingRequest = false);
                       })
                       .catch((e) => {
                         alert(e), (f.isHandlingRequest = false);
                       });
                   })
                   .catch((e) => {
                     e8(e, true), (f.isHandlingRequest = false);
                   }));
             }),
             p.appendChild(f);
         }
 
         var m = eR("block", "Remove Friend");
         return ((m.isHandlingRequest = false),
         m.addEventListener("click", function () {
           !m.isHandlingRequest &&
             confirm(
               'Are you sure you want to remove "' +
                 e.username +
                 '" as your friend?'
             ) &&
             ((m.isHandlingRequest = true),
             firebase
               .auth()
               .currentUser.getIdToken()
               .then((t) => {
                 fetch(ea + "/api/v1/social/friends", {
                   method: "POST",
                   headers: {
                     "Content-Type": "application/json"
                   },
                   body: JSON.stringify({
                     token: t,
                     target: e.uid,
                     action: 4
                   })
                 })
                   .then((e) => e.json())
                   .then((t) => {
                     alert(t.message),
                       200 === t.code &&
                         (firebase.database().ref(J.callbacks[e.uid]).off(),
                         J.elements[e.uid].remove(),
                         delete J.callbacks[e.uid],
                         delete J.elements[e.uid]),
                       (m.isHandlingRequest = false);
                   })
                   .catch((e) => {
                     alert(e), (m.isHandlingRequest = false);
                   });
               })
               .catch((e) => {
                 e8(e, true), (m.isHandlingRequest = false);
               }));
         }),
         p.appendChild(m),
         i.appendChild(r),
         i.appendChild(p),
         s)
           ? t.appendChild(i)
           : i;
       }
 
       function e3(e, t) {
         t && tm(t),
           $("#profile-username").text(e.username),
           $("#profile-avatar").attr("src", e.avatar),
           $("#profile-avatar").attr("alt", e.username),
           $("#profile-level").html(
             "Level " +
               e.levelData.level +
               "&nbsp;&nbsp;&nbsp;[" +
               t9(e.levelData.xp_current) +
               "/" +
               t9(e.levelData.xp_needed) +
               "]"
           ),
           e.title && e.title > 0 && tW[e.title]
             ? $("#profile-title").text(tW[e.title])
             : $("#profile-title").text(""),
           $("#profile-name").off("click"),
           e.uid == V.uid
             ? ($("#profile-name").on("click", function () {
                 $("#popup-profile").hide(), tg($("#popup-account-username"));
               }),
               $("#profile-name").css("cursor", "pointer"))
             : $("#profile-name").css("cursor", "default"),
           e.flags.STAFF
             ? $("#profile-avatar").addClass("spin")
             : $("#profile-avatar").removeClass("spin"),
           e6($("#profile-username"), e),
           $("#profile-close-btn").off("click"),
           $("#profile-close-btn").on("click", function () {
             t && tf(t), tm($("#popup-profile"));
           }),
           tf($("#popup-profile"));
       }
 
       function e4(e) {
         if (!X) {
           var t = $("#social-friends .user-list")[0],
             n = $("#social-friends .user-list")[1];
           $("#social-uid").text(e.uid),
             firebase
               .database()
               .ref("/friendships/" + e.uid)
               .on("value", function (e) {
                 if (null === e.val()) {
                   var s = document.createElement("div"),
                     a = document.createElement("span");
                   (s.className = "title-text center"),
                     (a.innerText = `You have no friends 😥`),
                     s.appendChild(a),
                     t.appendChild(s);
                   return;
                 }
 
                 var i = 0,
                   o = e.val(),
                   r = false;
                 Object.keys(o).map((e) => {
                   var s = o[e];
 
                   if (!s && !r) {
                     (r = true),
                       firebase
                         .auth()
                         .currentUser.getIdToken()
                         .then((t) => {
                           fetch(ea + "/api/v1/social/friends/pending", {
                             method: "POST",
                             headers: {
                               "Content-Type": "application/json"
                             },
                             body: JSON.stringify({
                               token: t
                             })
                           })
                             .then((e) => e.json())
                             .then((t) => {
                               200 === t.code &&
                                 t.profiles.forEach((t) => {
                                   if (
                                     (J.pendingFriends.includes(t) ||
                                       J.pendingFriends.push(t.uid),
                                     J.elements[t.uid])
                                   ) {
                                     var s = eB(t, J.elements[t.uid], false, false);
                                     n.replaceChild(s, J.elements[t.uid]),
                                       (J.elements[e] = s);
                                     return;
                                   }
 
                                   J.elements[t.uid] = eB(t, n, false, true);
                                 });
                             });
                         })
                         .catch((e) => e8(e, false));
                     return;
                   }
 
                   if (!J.callbacks[e]) {
                     var a = "/users/" + e;
                     (J.callbacks[e] = a),
                       firebase
                         .database()
                         .ref(a)
                         .on("value", function (n) {
                           if (null !== n.val()) {
                             var s = n.val();
 
                             if (
                               ((J.timestamps[s.uid] = s.presence.timestamp),
                               J.pendingFriends.includes(e))
                             ) {
                               J.pendingFriends.slice(
                                 J.pendingFriends.indexOf(e),
                                 1
                               ),
                                 J.elements[e].remove();
                               var a = eB(s, J.elements[e], true, false);
                               t.appendChild(a), (J.elements[e] = a);
                               return;
                             }
 
                             if (J.elements[e]) {
                               var a = eB(s, J.elements[e], true, false);
                               t.replaceChild(a, J.elements[e]),
                                 (J.elements[e] = a);
                               return;
                             }
 
                             (J.elements[e] = eB(s, t, true, true)),
                               en.friendOnlineCount.text(
                                 (function () {
                                   var e = 0,
                                     t = new Date().getTime();
 
                                   for (var n in J.timestamps) {
                                     var s = J.timestamps[n];
                                     !(s + 6e4 < t || void 0 === s) && e++;
                                   }
 
                                   return e;
                                 })() + " online"
                               );
                           }
                         });
                   }
 
                   s && i++;
                 }),
                   $("#social-friends-count").text(i);
               }),
             setInterval(function () {
               for (var e in J.timestamps) {
                 if (!J.timestamps.hasOwnProperty(e)) return;
                 var t = J.timestamps[e];
 
                 if (t + 6e4 < new Date().getTime() || void 0 === t) {
                   var n = J.elements[e].children[1].children[1];
                   (n.innerText = "Not playing on any server"),
                     (n.className = "status offline");
                   var s = J.elements[e].children[2].children[0];
                   "Join Server" === s.dataset.balloon && s.remove();
                 }
               }
             }, 6e4),
             (X = true);
         }
       }
 
       function e1() {
         void 0 !== window.grecaptcha &&
           ((Q = window.grecaptcha),
           (window.grecaptcha = void 0),
           Q.ready(function () {}));
       }
 
       function e2() {
         var e = $("#food-color-list");
 
         if ((e.empty(), 0 == em._FoodColors.length)) {
           eH();
           return;
         }
 
         try {
           for (var t in em._FoodColors) {
             var n = em._FoodColors[t];
             e.append(
               "<div c='" +
                 n +
                 "' style='background:" +
                 n +
                 ";color:" +
                 ne(n) +
                 ";'><span>" +
                 n +
                 "</span><div><button class='btn-food-color'>X</button></div></div>"
             );
           }
 
           $(".btn-food-color").on("click", function () {
             for (
               var e, t, n = $(this).parents().eq(1).attr("c");
               -1 !== (e = em._FoodColors.indexOf(n));
 
             )
               em._FoodColors.splice(e, 1), (t = true);
 
             t && e2();
           });
         } catch (s) {
           (em._FoodColors = []), e.empty();
         }
 
         eH();
       }
 
       function eH() {
         for (var e of ((ey = []), em._FoodColors))
           ey.push(t.utils.string2hex(e));
 
         for (var n in g.foodObjects) g.foodObjects[n].needsPixiUpdate = true;
       }
 
       function ez(e) {
         var t = $(".keybinds-btn-selected");
 
         if (((eu = false), 0 != t.size())) {
           var n = t.first();
           t.removeClass("keybinds-btn-selected"),
             27 != e ? (ep[n.attr("id")] = e) : (ep[n.attr("id")] = -1),
             eG(n);
         }
       }
 
       function eG(e) {
         var t,
           n = ep[e.attr("id")];
         e.html((t = n) > 0 ? tX[t].toUpperCase() : "&nbsp;");
       }
 
       function eY() {
         var e = document.getElementById("logo");
         eh.cDisableEventSkins || !ei.enabled
           ? (e.style.backgroundImage = "url('images/logo.png')")
           : ei.enabled &&
             (e.style.backgroundImage =
               "url('images/events/" + ei.key + "/logo.png')");
       }
 
       function eW() {
         !eh.cDisableEventSkins && ei.enabled
           ? ((e = "images/events/" + ei.key), (n = "/spike_mother_happy.png"))
           : ((e = "images"), (n = "/spike_mother.png"));
         var e,
           n,
           s = new Image();
         s.addEventListener("load", function () {
           if (((_ = t.Texture.from(s)), g))
             for (var e in g.bucket) {
               var n = g.bucket[e];
               3 == n.type && (n.needsPixiUpdate = true);
             }
         });
         var a = new Image();
         a.addEventListener("load", function () {
           if (((w = t.Texture.from(a)), g))
             for (var e in g.bucket) {
               var n = g.bucket[e];
               4 == n.type && (n.needsPixiUpdate = true);
             }
         });
         var i = new Image();
         i.addEventListener("load", function () {
           if (((S = t.Texture.from(i)), g))
             for (var e in g.bucket) {
               var n = g.bucket[e];
               4 == n.type && (n.needsPixiUpdate = true);
             }
         }),
           (s.src = e + "/spike.png"),
           (a.src = e + "/spike_mother.png"),
           (i.src = e + n);
       }
 
       (eL.prototype.connectionStart = function () {
         var e = "Gota Web " + version,
           t = new ArrayBuffer(1 + e.length + 1 + 1),
           n = new DataView(t);
         return n.setUint8(0, 255), n.setUint8(1, 6), eM(2, n, e), t;
       }),
         (eL.prototype.setName = function (e) {
           var t = new ArrayBuffer(2 + (e.length + 1) * 2),
             n = new DataView(t);
           return (
             n.setUint8(0, 0),
             eF(1, n, e),
             eh.cSilentLogin && n.setUint8(2 + 2 * e.length + 1, 1),
             t
           );
         }),
         (eL.prototype.sendKey = function (e) {
           var t = new ArrayBuffer(1);
           return new DataView(t).setUint8(0, e), t;
         }),
         (eL.prototype.sendMouse = function (e, t) {
           var n = new ArrayBuffer(9),
             s = new DataView(n);
           return (
             s.setUint8(0, 16), s.setInt32(1, e, true), s.setInt32(5, t, true), n
           );
         }),
         (eL.prototype.sendEjectMass = function (e) {
           var t = new ArrayBuffer(1);
           return new DataView(t).setUint8(0, e ? 3 : 4), t;
         }),
         (eL.prototype.sendPing = function () {
           var e = new ArrayBuffer(1);
           return new DataView(e).setUint8(0, 71), e;
         }),
         (eL.prototype.sendSpectate = function (e) {
           var t = new ArrayBuffer(3),
             n = new DataView(t);
           return n.setUint8(0, 1), e && n.setUint16(1, e, true), t;
         }),
         (eL.prototype.sendChat = function (e, t) {
           var n = new ArrayBuffer(2 + (e.length + 1) * 2),
             s = new DataView(n);
           return s.setUint8(0, 72), s.setUint8(1, t), eF(2, s, e), n;
         }),
         (eL.prototype.sendInviteResponse = function (e) {
           var t = new ArrayBuffer(2),
             n = new DataView(t);
           return n.setUint8(0, 41), n.setUint8(1, e ? 1 : 0), t;
         }),
         (eL.prototype.sendPartyAction = function (e, t) {
           var n = new ArrayBuffer(6),
             s = new DataView(n);
           return s.setUint8(0, 40), s.setUint8(1, e), s.setUint32(2, t, true), n;
         }),
         (eL.prototype.sendPartyJoin = function (e) {
           var t = new ArrayBuffer(1 + e.length + 1),
             n = new DataView(t);
           return n.setUint8(0, 42), eM(1, n, e), t;
         }),
         (eL.prototype.sendShowProfile = function (e) {
           var t = new ArrayBuffer(3),
             n = new DataView(t);
           return n.setUint8(0, 103), n.setUint16(1, e, true), t;
         }),
         (eL.prototype.sendWhisper = function (e, t) {
           var n = new ArrayBuffer(5 + (t.length + 1) * 2),
             s = new DataView(n);
           return s.setUint8(0, 73), s.setUint32(1, e, true), eF(5, s, t), n;
         }),
         (eL.prototype.sendSubPanel = function () {
           var e = new ArrayBuffer(8 + (eb.skinName.length + 1)),
             t = new DataView(e);
           return (
             t.setUint8(0, 10),
             t.setUint8(1, eb.nameColor.r),
             t.setUint8(2, eb.nameColor.g),
             t.setUint8(3, eb.nameColor.b),
             t.setUint8(4, eb.chatColor),
             t.setUint8(5, eb.effect),
             t.setUint8(6, eb.lowerName ? 1 : 0),
             eM(7, t, eb.skinName),
             t.setUint8(8 + eb.skinName.length, eb.nameFont),
             e
           );
         }),
         (eL.prototype.sendLockedNameChange = function (e) {
           var t = new ArrayBuffer(1 + (e.length + 1)),
             n = new DataView(t);
           return n.setUint8(0, 11), eM(1, n, e), t;
         }),
         (eL.prototype.sendOptions = function () {
           var e = new ArrayBuffer(3),
             t = new DataView(e);
           return t.setUint8(0, 104), t.setUint16(1, eh.rViewDistance, true), e;
         }),
         (eL.prototype.sendQueue = function (e) {
           var t = new ArrayBuffer(5),
             n = new DataView(t);
           return (
             n.setUint8(0, 80),
             n.setUint8(1, e),
             n.setUint8(2, 0),
             n.setUint16(3, 0),
             t
           );
         }),
         (eL.prototype.sendCustomGame = function (e) {
           var t = new ArrayBuffer(2),
             n = new DataView(t);
           return n.setUint8(0, 90), n.setUint8(1, e), t;
         }),
         (eL.prototype.sendLeaveMatch = function () {
           var e = new ArrayBuffer(1);
           return new DataView(e).setUint8(0, 81), e;
         }),
         (eL.prototype.sendShowLobbies = function () {
           var e = new ArrayBuffer(2);
           return new DataView(e).setUint8(0, 93), e;
         }),
         (eL.prototype.sendJoinLobby = function (e, t) {
           var n = new ArrayBuffer(5 + 2 * t.length + 2),
             s = new DataView(n);
           return s.setUint8(0, 94), s.setUint32(1, e, true), eF(5, s, t), n;
         }),
         (eL.prototype.sendCaptcha = function (e) {
           var t = new ArrayBuffer(1 + (e.length + 1)),
             n = new DataView(t);
           return n.setUint8(0, 100), eM(1, n, e), t;
         }),
         (eL.prototype.sendAuthToken = function (e) {
           var t = new ArrayBuffer(1 + (e.length + 1)),
             n = new DataView(t);
           return n.setUint8(0, 101), eM(1, n, e), t;
         }),
         (eL.prototype.sendCustomGameUpdate = function (e, t, n) {
           var s = new ArrayBuffer(4),
             a = new DataView(s);
           return (
             a.setUint8(0, 91),
             a.setUint8(1, e),
             e == nr.STARTMASS || e == nr.VIRUS_DENSITY
               ? a.setUint16(2, t, false)
               : e == nr.RESPAWN_DELAY
               ? a.setInt16(2, t, false)
               : (a.setUint8(2, t), a.setUint8(3, n)),
             s
           );
         }),
         (eL.prototype.sendCustomGameUpdateString = function (e, t) {
           var n = new ArrayBuffer(4 + 2 * t.length),
             s = new DataView(n);
           return s.setUint8(0, 92), s.setUint8(1, e), eF(2, s, t), n;
         });
       let ej = {
         cDisableAA: function () {
           h && $("#performance-refresh").css("display", "table-row");
         },
         sRenderType: function () {
           h && $("#performance-refresh").css("display", "table-row");
         },
         cHideId: function () {
           var e = eh.cHideId ? "none" : "block";
           $(".pID").css("display", e);
         },
         cHideServerDisplay: function () {
           var e = eh.cHideServerDisplay ? "none" : "block";
           $(".psvr").css("display", e);
         },
         cTransCells: function () {
           r.alpha = eh.cTransCells ? 0.5 : 1;
         },
         cColoredCellCount: function () {
           g.updateCellCounter(en.playerCellCount, true);
         },
         cHideChat: function () {
           var e = eh.cHideChat ? "none" : "block";
           $("#chat-panel").css("display", e);
         },
         cHideMinimap: function () {
           var e = eh.cHideMinimap ? "none" : "block";
           $("#minimap-panel").css("display", e);
         },
         cHideScorePanel: function () {
           var e = eh.cHideScorePanel ? "none" : "inline-block";
           $("#score-panel").css("display", e);
         },
         cHideLeaderboard: function () {
           var e = eh.cHideLeaderboard ? "none" : "block";
           $("#leaderboard-panel").css("display", e);
         },
         cHideExtraPanel: function () {
           var e = eh.cHideExtraPanel ? "none" : "block";
           $("#extra-panel").css("display", e);
         },
         cShowCoordinates: function () {
           var e = eh.cShowCoordinates ? "block" : "none";
           $("#minimap-coordinates").css("display", e), e5();
         },
         cDisableAutoZoom: function () {
           eh.cDisableAutoZoom &&
             (g.scale_base = 0.2 * Math.max(u.height / 1080, u.width / 1920));
         },
         cThemeEnabled: function () {
           eh.cThemeEnabled
             ? eS(function (e) {
                 $("#" + e).spectrum("enable");
               })
             : (tS(),
               eS(function (e) {
                 $("#" + e).spectrum("disable");
               }));
         },
         cShowBorder: function () {
           eU();
         },
         cDisableEventSkins: function () {
           ei.enabled && $("body").toggleClass("event-" + ei.key),
             void 0 !== N ||
               eh.cDisableEventSkins ||
               (N = new tT(ei.particlesMax)),
             eW(),
             eY();
         },
         cResizableChat: function () {
           $("#chat-resize").css(
             "display",
             eh.cResizableChat ? "block" : "none"
           );
         },
         sShowNames: function () {
           ec.levelNames = ns[eh.sShowNames];
         },
         sShowSkins: function () {
           ec.levelSkins = ns[eh.sShowSkins];
         },
         sMassType: function () {
           ec.massType = na[eh.sMassType];
         },
         sTextOutlines: function () {
           for (var e in ((ec.textOutlineSize = ni[eh.sTextOutlines]),
           g.playerRegistry.bucket)) {
             var t = g.playerRegistry.bucket[e];
             t.nameCache &&
               (t.nameCache.style.strokeThickness = ec.textOutlineSize),
               g.playerRegistry.updatePlayer(t);
           }
 
           eI.buildSizeCache();
         },
         sQuality: function () {
           var e = ec.resolution;
           (ec.resolution = no[eh.sQuality]),
             e !== ec.resolution && $(window).trigger("resize");
         },
         uiForegroundColor: function (e) {
           g && g.drawParty(),
             $(".fg-interface-color").css("color", e),
             $(".interface-color").css("color", e),
             $(".gota-btn").css("color", e).css("border-color", e),
             $(".popup-panel").css("color", e),
             $(".main").css("color", e),
             $(".main-bottom-stats").css("border-color", e);
         },
         uiBackgroundColor: function (e) {
           $(".hud-panel .interface-color").css("background-color", e);
         },
         uiButtonColor: function (e) {
           $(".gota-btn").css("background-color", e);
         },
         uiBorderColor: function (e) {
           $(".ui-pane").css("border-color", e),
             $("#chat-tab-container").css("border-color", e),
             $(".chat-tab").css("border-color", e);
         },
         uiMenuBackgroundColor: function (e) {
           $(".main-panel").css("background-color", e),
             $(".popup-panel").css("background-color", e),
             $(".options-container").css("background-color", e);
         },
         uiMenuTitleBackgroundColor: function (e) {
           $(".menu-title").css("background-color", e);
         },
         uiMenuSubBackgroundColor: function (e) {
           $(".menu-sub-bg").css("background-color", e),
             $(".server-active").css("background-color", e),
             $("#server-content").css("background-color", e);
         },
         uiMenuSubBackground2Color: function (e) {
           $(".menu-sub-bg2").css("background-color", e),
             $(".server-table tbody").css("background-color", e);
         },
         uiPartyLeaderColor: function () {
           g && g.drawParty();
         },
         uiGameColorSuccess: function (e) {
           $("#social-friends-online-count").css("color", e);
         },
         uiGameBackgroundColor: function (e) {
           document.body.style.background = e;
         },
         uiGameBorderColor: function () {
           eU();
         },
         rUiScale: function (e) {
           (eh.rUiScale = Math.min(Math.max(e, 0.5), 1.25)),
             $("#uiScale").val(Number.parseFloat(100 * eh.rUiScale).toFixed(0)),
             $(".ui-scale").css("transform", "scale(" + eh.rUiScale + ")");
         },
         rAnimationDelay: function (e) {
           (eh.rAnimationDelay = Math.min(Math.max(e, 1), 250)),
             $("#animationDelay").val(eh.rAnimationDelay);
         },
         rViewDistance: function (e) {
           (eh.rViewDistance = Math.min(Math.max(e, 50), 150)),
             $("#viewDistance").val(eh.rViewDistance),
             g.sendOptions();
         },
         rBorderSize: function (e) {
           (em.rBorderSize = Math.min(Math.max(e, 1), 256)),
             $("#borderSize").text(em.rBorderSize),
             eU();
         },
         rBackgroundOpacity: function (e) {
           (em.rBackgroundOpacity = Math.min(Math.max(e, 0), 1)),
             $("#backgroundOpacity").text(
               Number.parseFloat(100 * em.rBackgroundOpacity).toFixed(0)
             ),
             (document.getElementById("canvas-background").style.opacity =
               em.rBackgroundOpacity);
         },
         aCustomBackground: function (e) {
           (document.getElementById("canvas-background").style.backgroundImage =
             "url('" + e + "')"),
             (document.getElementById("canvas-background").style.backgroundSize =
               "100% 100%");
         },
         aCustomSpike: function (e) {
           for (var n in (e$.aCustomSpike && e$.aCustomSpike.destroy(),
           (e$.aCustomSpike = null),
           g.bucket)) {
             var s = g.bucket[n];
             3 == s.type && (s.needsPixiUpdate = true);
           }
 
           if (0 != e.length) {
             var a = new Image();
             (a.crossOrigin = ""),
               a.addEventListener("load", function () {
                 e$.aCustomSpike = t.Texture.from(a);
               }),
               a.addEventListener("error", function () {
                 g.selfMsg("Unable to load custom theme virus.");
               }),
               (a.src = e);
           }
         },
         aCustomMother: function (e) {
           for (var n in (e$.aCustomMother && e$.aCustomMother.destroy(),
           (e$.aCustomMother = null),
           g.bucket)) {
             var s = g.bucket[n];
             4 == s.type && (s.needsPixiUpdate = true);
           }
 
           if (0 != e.length) {
             var a = new Image();
             (a.crossOrigin = ""),
               a.addEventListener("load", function () {
                 e$.aCustomMother = t.Texture.from(a);
               }),
               a.addEventListener("error", function () {
                 g.selfMsg("Unable to load custom theme mother cell.");
               }),
               (a.src = e);
           }
         }
       };
 
       function e5() {
         eh.cShowCoordinates
           ? ($("#minimap-canvas").css({
               "border-top": "2px solid rgba(255, 255, 255, .2)"
             }),
             $("#minimap-panel").css({
               height: "270px"
             }))
           : ($("#minimap-canvas").css({
               "border-top": "0"
             }),
             $("#minimap-panel").css({
               height: "250px"
             }));
       }
 
       function e7(e) {
         (eb.skinName = $("#spSkinName").val().toLowerCase()),
           (eb.lowerName = $("#spLowerName").prop("checked")),
           (eb.nameColor = $("#spNameColor").spectrum("get").toRgb());
 
         for (
           var t = $("#spChatColor").spectrum("get").toHexString().toUpperCase(),
             n = 0,
             s = 0;
           s < tY.length;
           s++
         )
           if (tY[s] == t) {
             n = s;
             break;
           }
 
         (eb.chatColor = n),
           (eb.effect = parseInt($("#spEffect").val())),
           (eb.nameFont = parseInt($("#spNameFont").val())),
           g.sendPacket(new v.sendSubPanel(e));
       }
 
       function eV() {
         Y || g.subPanelOverride
           ? ($("#btn-cellpanel").prop("disabled", false),
             Y
               ? $(".subpanel-name-dashboard").css("display", "")
               : $(".subpanel-name-dashboard").css("display", "none"),
             eb.rules
               ? ($("#subpanel-rules").css("display", "none"),
                 $("#subpanel-content").css("display", "block"))
               : ($("#subpanel-content").css("display", "none"),
                 $("#subpanel-rules").css("display", "block")))
           : $("#btn-cellpanel").prop("disabled", true);
       }
 
       function eK(t) {
         g.accountListeners.loadSubPanel ||
           (g.accountListeners.loadSubPanel = firebase
             .firestore()
             .collection("accounts")
             .doc(t)
             .onSnapshot(
               (t) => {
                 t.exists && t.data().locked
                   ? ((Y = true),
                     $("#spLockedName").html(t.data().name),
                     void 0 !== t.data().lastChange &&
                       $("#btn-chg-ln").attr(
                         "title",
                         "Last Changed: " +
                           new Date(t.data().lastChange).toLocaleString()
                       ),
                     null !== t.data().expiry
                       ? $("#spExpiry").html(
                           new Date(
                             1e3 * t.data().expiry.seconds
                           ).toLocaleString()
                         )
                       : $("#spExpiry").html("Never"))
                   : ((Y = false),
                     "none" !== $("#main-subpanel").css("display") &&
                       e("main-servers")),
                   eV(),
                   g.accountListeners.loadSubPanel(),
                   (g.accountListeners.loadSubPanel = null);
               },
               () => {
                 g.accountListeners.loadSubPanel(),
                   (g.accountListeners.loadSubPanel = null);
               }
             ));
       }
 
       function eX(e, t, n, s, a, i, o, r, c) {
         (this.name = e),
           (this.ip = t),
           (this.players = n),
           (this.bots = s),
           (this.playerText = a),
           (this.mode = i),
           (this.region = o),
           (this.ssl = r),
           (this.order = c);
       }
 
       function eJ() {
         for (var e in ($("#servers-body-eu").html(""),
         $("#servers-body-na").html(""),
         $("#servers-body-ap").html(""),
         eo))
           for (var t in eo[e]) {
             var n = eo[e][t],
               s =
                 n.bots > 0
                   ? ' title="Players: ' +
                     n.players +
                     "&#10;Bots: " +
                     n.bots +
                     '"'
                   : "";
             $("#servers-body-" + n.region).append(
               '<tr id="s_' +
                 n.name +
                 '" class="server-row" server="' +
                 n.name +
                 '"><td class="server-table-name">' +
                 n.name +
                 '</td><td class="server-table-players"' +
                 s +
                 ">" +
                 n.playerText +
                 '</td><td class="server-table-mode">' +
                 n.mode +
                 "</td></tr>"
             );
           }
 
         for (var t in er) {
           var n = er[t];
           $("#servers-body-" + n.region).prepend(
             '<tr id="s_' +
               n.name +
               '" class="account-server server-row" server="' +
               n.name +
               '"><td class="server-table-name">' +
               n.name +
               '</td><td class="server-table-players">' +
               n.playerText +
               '</td><td class="server-table-mode">' +
               n.mode +
               "</td></tr>"
           );
         }
 
         $(".server-row").on("click", function () {
           eq($(this).attr("server"));
         });
       }
 
       function eZ(e) {
         for (var t in eo)
           for (var n in eo[t])
             if (n.toLowerCase() === e.toLowerCase()) return eo[t][n];
 
         return null;
       }
 
       function eq(e) {
         null != P && $("#s_" + P.name).removeClass("server-selected"),
           null !=
             (P =
               eZ(e) ||
               (Object.keys(er).length > 0
                 ? (function (e) {
                     for (var t in er)
                       if (e.toLowerCase() === t.toLowerCase()) return er[t];
 
                     return null;
                   })(e)
                 : null)) && $("#s_" + P.name).addClass("server-selected");
       }
 
       function eQ(e) {
         var t = $("#server-tab-" + (e = e.toLowerCase()));
         $(".server-active").css("background-color", "inherit"),
           $("#server-tab-container").children().removeClass("server-active"),
           t.addClass("server-active"),
           $(".server-active").css(
             "background-color",
             em.uiMenuSubBackgroundColor
           ),
           $("#server-content").children().css("display", "none"),
           $("#servers-" + e).css("display", "block");
       }
 
       function e9(e, t) {
         var n = 0;
 
         for (tab in eh._ChatTabs) {
           var s = eh._ChatTabs[tab];
 
           if ((e & s.flags) == e) {
             $("#chat-body-" + tab + " tr").length >= s.maxMessages &&
               $("#chat-body-" + tab + " tr:first-child").remove();
             var a = n > 0 ? t.cloneNode(true) : t;
             n++;
             var i = document.createElement("tr");
             i.appendChild(a),
               document.getElementById("chat-body-" + tab).appendChild(i);
             var o = $("#chat-container-" + tab);
             o[0].scrollHeight - o[0].scrollTop < o.outerHeight() + 150 &&
               o.scrollTop(o[0].scrollHeight);
           }
         }
       }
 
       function te(e) {
         $("#chat-input").val(e);
       }
 
       function tt() {
         return $("#chat-input").val();
       }
 
       function tn() {
         var e = $("#chat-tab-container"),
           t = $("#chat-container");
 
         for (var n in (e.empty(), t.empty(), eh._ChatTabs)) {
           var s = eh._ChatTabs[n];
           0 == s.name.length && (s.name = "Unnamed"),
             e.append(
               "<li class='chat-tab' id='chat-tab-" +
                 n +
                 "' name='" +
                 n +
                 "'><span>" +
                 s.name +
                 "</span></li>"
             ),
             t.append(
               "<div class='chat-inner-container' id='chat-container-" +
                 n +
                 "'><table class='chat-table'><tbody id='chat-body-" +
                 n +
                 "'></tbody></table></div>"
             );
         }
 
         $(".chat-tab")
           .on("click", function () {
             ts($(this).attr("name"));
           })
           .css("border-color", em.uiBorderColor),
           ed >= 0 && ed < eh._ChatTabs.length ? ts(ed) : ts(0);
       }
 
       function ts(e) {
         $(".chat-tab").removeClass("chat-active-tab"),
           $(".chat-inner-container")
             .removeClass("chat-active-container")
             .css("display", "none"),
           (ed = e),
           eh._ChatTabs[e] &&
             ($("#chat-tab-" + e).addClass("chat-active-tab"),
             $("#chat-container-" + e)
               .addClass("chat-active-container")
               .css("display", "block"));
       }
 
       function ta(e = 0) {
         var t = $("#cte-tab-selector");
 
         for (var n in (t.empty(), eh._ChatTabs))
           t.append(
             "<option value='" + n + "'>" + eh._ChatTabs[n].name + "</option>"
           );
 
         t.prop("selectedIndex", e), t.trigger("change");
       }
 
       function ti() {
         var e = $("#cte-tab-selector").val(),
           t = {
             name: "",
             flags: 0,
             maxMessages: 0
           },
           n = eh._ChatTabs[e];
         if (n) for (var s in t) t[s] = n[s];
 
         for (var a in ($("#cte-tab-name").val(t.name), nh)) {
           var i = (nh[a] & t.flags) == nh[a];
           $("#cte-type-" + a.toLowerCase()).prop("checked", i);
         }
 
         $("#cte-max-messages").val(t.maxMessages);
       }
 
       function to() {
         var e = $("#cte-tab-selector").val(),
           t = eh._ChatTabs[e];
 
         if (t) {
           var n = t.name,
             s = $("#cte-tab-name").val();
 
           if (0 != s.length) {
             var a = 0,
               i = parseInt($("#cte-max-messages").val());
 
             for (var o in nh)
               $("#cte-type-" + o.toLowerCase()).prop("checked") && (a += nh[o]);
 
             (t.name = s),
               (t.flags = a),
               (t.maxMessages = i),
               s != n &&
                 (ta(e),
                 (function () {
                   for (var e in eh._ChatTabs) {
                     var t = eh._ChatTabs[e];
 
                     if (t) {
                       0 == t.name.length && (t.name = "Unnamed");
                       var n = $("#chat-tab-" + e);
                       n && n.html("<span>" + t.name + "</span>");
                     }
                   }
                 })());
           }
         }
       }
 
       function tr() {
         eh._ChatTabs.push({
           name: "New",
           flags: 0,
           maxMessages: 100
         }),
           ta(eh._ChatTabs.length - 1),
           tn();
       }
 
       function tc() {
         var e = $("#cte-tab-selector").val();
         eh._ChatTabs[e] && (eh._ChatTabs.splice(e, 1), ta(), tn());
       }
 
       var tl = function (e) {
           th(e, this.innerText, this.dataset.playerId, -1);
         },
         td = function (e) {
           var t = e.offsetY,
             n = Math.floor(t / 20);
 
           if (!(t % 20 < 5)) {
             var s = g.party[n];
             null != s && th(e, s.name, s.id, n);
           }
         };
 
       function th(e, t, n, s) {
         (document.getElementById("context-name").innerText =
           t || "An unnamed cell"),
           D.data("selected", n),
           D.data("party", s),
           $(".context-action").css("display", "none"),
           -1 == s
             ? ($("#menu-invite").css("display", "block"),
               $("#menu-whisper").css("display", "block"),
               $("#menu-block").css("display", "block"),
               $("#menu-profile").css("display", "block"))
             : ($("#menu-whisper").css("display", "block"),
               $("#menu-profile").css("display", "block"),
               g.isPartyLeader() &&
                 ($("#menu-pu_pr").css("display", "block"),
                 $("#menu-promote").css("display", "block"),
                 $("#menu-kick").css("display", "block"))),
           g.spectate && $("#menu-spectate").css("display", "block"),
           D.css("display", "block"),
           D.css("left", Math.min(g.mouseRawX, window.innerWidth - D.width())),
           D.css("top", Math.min(g.mouseRawY, window.innerHeight - D.height()));
       }
 
       function tp(e) {
         return e.replace(/</g, "&lt;").replace(/>/g, "&gt;");
       }
 
       function tu(e, t, n, s, a, i, o) {
         var r =
             ((n - g.serverData.border.left) / g.serverData.border.width) *
             f.width,
           c =
             ((s - g.serverData.border.top) / g.serverData.border.height) *
             f.height;
 
         if (
           (e.beginPath(),
           e.arc(r, c, a, 0, et, false),
           (e.fillStyle = i),
           e.fill(),
           o)
         ) {
           var l = e.measureText(t).width / 2;
           e.fillText(t, r - l, c - 5);
         }
       }
 
       function tf(e) {
         "none" == e.css("display") &&
           (e.css("display", "block"),
           e.animate(
             {
               opacity: 1
             },
             500
           ));
       }
 
       function tm(e) {
         "block" == e.css("display") &&
           1 == e.css("opacity") &&
           e.animate(
             {
               opacity: 0
             },
             500,
             function () {
               e.css("display", "none");
             }
           );
       }
 
       function tg(e) {
         "block" == e.css("display") && 1 == e.css("opacity")
           ? tm(e)
           : "none" == e.css("display") && tf(e);
       }
 
       function tv(e) {
         return "none" === e.css("display");
       }
 
       function t$() {
         T.show(),
           (0 == g.party.length || eh.cHidePartyPanel) &&
             en.partyPanel.css("display", "none"),
           eh.cHideChat && $("#chat-panel").css("display", "none"),
           eh.cHideMinimap && $("#minimap-panel").css("display", "none");
       }
 
       function ty() {
         T.hide();
       }
 
       function tb(e) {
         var t = e.attr("id");
         (eh[t] = e.prop("checked")), t_(t);
       }
 
       function tk(e) {
         var t = e.attr("id");
         (eh[t] = e.val()), t_(t, e.val());
       }
 
       function tC(e) {
         t_(e.attr("id"), e.val());
       }
 
       function t_(e, t) {
         var n = ej[e];
         null != n && n(t);
       }
 
       function tw(e, t) {
         null != t && ((em[e] = t), t_(e, t));
       }
 
       function tS() {
         for (var e in eg) {
           var t = e.charAt(0);
           "r" == t
             ? ($("#" + e).val(eg[e]), tC($("#" + e)))
             : "u" == t
             ? ((em[e] = eg[e]), $("#" + e).spectrum("set", em[e]), t_(e, em[e]))
             : "a" == t
             ? tw(e, "")
             : (em[e] = eg[e]);
         }
 
         em._FoodColors = [];
       }
 
       function tP(e) {
         try {
           var t = JSON.parse(e);
 
           if (null == t.version || 2 != t.version) {
             tS();
             return;
           }
 
           for (var n in t)
             if (null != em[n] && 0 != t[n].length) {
               em[n] = t[n];
               var s = n.charAt(0);
               "u" == s
                 ? ($("#" + n).spectrum("set", em[n]), t_(n, em[n]))
                 : "r" == s
                 ? ($("#" + n).val(em[n]), tC($("#" + n)))
                 : "a" == s && tw(n, em[n]);
             }
         } catch (a) {
           tS();
         } finally {
           eH();
         }
       }
 
       function tU(e) {
         if (/.(json)$/i.test(e.name)) {
           var t = new FileReader();
           t.addEventListener(
             "load",
             function () {
               eh.cThemeEnabled || tE(), tS(), tP(this.result);
             },
             false
           ),
             t.readAsText(e);
         }
       }
 
       function tE() {
         $("#cThemeEnabled").prop("checked", true).trigger("change");
       }
 
       function tx(e) {
         for (var t = e.split(" "), n = "", s = null, a = 0; a < t.length; a++)
           0 != a && (n += " "),
             null != M[(s = t[a])]
               ? (s.startsWith(":") &&
                   s.endsWith(":") &&
                   (s = s.substring(1, s.length - 1)),
                 (n +=
                   '<img src="https://gota.io/emotes/' +
                   s +
                   '.png" height="17" width="17" alt="' +
                   s +
                   '">'))
               : null != gifEmoteList[s]
               ? (s.startsWith(":") &&
                   s.endsWith(":") &&
                   (s = s.substring(1, s.length - 1)),
                 (n +=
                   '<img src="https://gota.io/emotes/gifs/' +
                   s +
                   '.gif" height="17" width="17" alt="' +
                   s +
                   '">'))
               : (n += s);
 
         return n;
       }
 
       function tT(e) {
         (this.particles = []),
           (this.MAX_PARTICLES = e),
           (this.init = function () {
             if (ei.particles)
               for (var e = 0; e < this.MAX_PARTICLES; e++) {
                 var t = new tI(
                   "images/events/" + ei.key + "/particles.png",
                   Math.floor(7 * Math.random())
                 );
                 this.particles.push(t);
               }
           }),
           (this.onTick = function (e, t) {
             for (var n in ((t /= 1e3), this.particles))
               this.particles[n].draw(e, t);
           }),
           this.init(e);
       }
 
       function tI(e, t) {
         (this.image = null),
           (this.frame = t),
           (this.x = 0),
           (this.y = 0),
           (this.speed = 0),
           (this.angle = 0),
           (this.init = function (e) {
             (this.image = new Image()),
               (this.image.src = e),
               (this.x = Math.random()),
               (this.y = Math.random() - 1.25),
               (this.speed = (75e-5 * Math.random() + 5e-4) * 60),
               (this.angle = 0);
           }),
           (this.draw = function (e, t) {
             this.y > 1
               ? (this.y = -0.25 * Math.random() + -0.1)
               : this.y < -1.25 && (this.y = -1.25),
               this.x > 1 ? (this.x = 0) : this.x < 0 && (this.x = 1),
               (this.angle += 0.1 * Math.random() - 0.05),
               (this.angle = Math.min(Math.max(-0.2, this.angle), 0.2));
             var n = t * this.speed;
             (this.x += n * Math.sin(this.angle)),
               (this.y += n * Math.cos(this.angle));
             var s = u.width * this.x,
               a = u.height * this.y;
             e.drawImage(this.image, 25 * this.frame, 0, 25, 60, s, a, 25, 60);
           }),
           this.init(e);
       }
 
       let t0 = {
         MODIFIER: 1,
         PASSIVE: 2,
         CONSUMABLE: 3,
         DEBUFF: 4,
         NONE: 0
       };
       var tA = {
         0: new tD("Random", "random", t0.NONE),
         1: new tD("Maximum Cells Upgrade", "extracells", t0.MODIFIER),
         2: new tD("Extra Consumable Slot", "extraconsumable", t0.MODIFIER),
         3: new tD("Merge", "merge", t0.PASSIVE),
         4: new tD("Grow", "grow", t0.PASSIVE),
         5: new tD("Speed", "speed", t0.PASSIVE),
         6: new tD("Shield", "shield", t0.PASSIVE),
         7: new tD("Virus", "spike", t0.CONSUMABLE),
         8: new tD("Disrupt", "disrupt", t0.CONSUMABLE),
         9: new tD("Teleport", "teleport", t0.CONSUMABLE),
         10: new tD("Disrupt", "_disrupt", t0.DEBUFF),
         11: new tD("Silver", "phoenix", t0.MODIFIER),
         12: new tD("Consumable Shield", "_shield", t0.CONSUMABLE),
         13: new tD("Magnet", "magnet", t0.PASSIVE),
         14: new tD("Decay", "decay", t0.CONSUMABLE),
         15: new tD("Decay", "_decay", t0.DEBUFF)
       };
 
       function tD(e, t, n) {
         (this.name = e),
           (this.img = t),
           (this.type = n),
           (this.image = null),
           (this.texture = null);
       }
 
       function tL() {
         (this.passiveBuffs = {}),
           (this.passiveSortedBuffs = []),
           (this.consumableBuffs = []),
           (this.cache = null),
           (this.nextCacheUpdate = 0),
           (this.texture = null),
           (this.bonusMaxCells = 0),
           (this.onAddBuff = function (e, t, n) {
             var s = null;
             tA[e].type != t0.CONSUMABLE
               ? ((s = this.passiveBuffs[e])
                   ? s.update(t, n)
                   : ((s = new tF(e, t, n)),
                     (this.passiveBuffs[e] = s),
                     this.sortPassiveBuffs()),
                 this.onPassiveBuffsUpdate(),
                 this.markCacheForUpdate())
               : ((s = new tF(e, t, n)),
                 this.consumableBuffs.push(s),
                 this.markCacheForUpdate()),
               s && g.selfMsg("Recieved buff: " + s.powerup.name);
           }),
           (this.onRemoveBuff = function (e) {
             var t = null;
             if (tA[e].type != t0.CONSUMABLE)
               (t = this.passiveBuffs[e]) &&
                 (delete this.passiveBuffs[e],
                 this.sortPassiveBuffs(),
                 this.markCacheForUpdate(),
                 this.onPassiveBuffsUpdate());
             else
               for (var n = 0; n < this.consumableBuffs.length; n++)
                 if ((t = this.consumableBuffs[n]).id == e) {
                   this.consumableBuffs.splice(n, 1), this.markCacheForUpdate();
                   break;
                 }
             t && g.selfMsg("Lost buff: " + t.powerup.name);
           }),
           (this.clearBuffs = function (e) {
             if (
               0 != this.passiveSortedBuffs.length ||
               0 != this.consumableBuffs.length
             ) {
               for (var t in this.passiveBuffs) {
                 var n = this.passiveBuffs[t];
                 (e && e && n.powerup.type == t0.MODIFIER) ||
                   delete this.passiveBuffs[t];
               }
 
               this.sortPassiveBuffs(),
                 this.onPassiveBuffsUpdate(),
                 (this.consumableBuffs = []),
                 this.markCacheForUpdate();
             }
           }),
           (this.sortPassiveBuffs = function () {
             if (((this.passiveSortedBuffs = []), 0 != this.passiveBuffs.length))
               for (var e in this.passiveBuffs)
                 this.passiveBuffs[e].powerup.type == t0.MODIFIER
                   ? this.passiveSortedBuffs.splice(0, 0, e)
                   : this.passiveSortedBuffs.push(e);
           }),
           (this.onPassiveBuffsUpdate = function () {
             if (((this.bonusMaxCells = 0), null != this.passiveBuffs[1])) {
               var e = this.passiveBuffs[1];
               this.bonusMaxCells = 16 * e.stack;
             }
           }),
           (this.update = function () {
             if (
               0 == this.passiveSortedBuffs.length &&
               0 == this.consumableBuffs.length
             ) {
               c.visible = false;
               return;
             }
 
             Date.now() >= this.nextCacheUpdate &&
               (this.updateCache(), (this.nextCacheUpdate = Date.now() + 1e3)),
               this.texture ||
                 ((this.texture = t.Texture.from(this.cache.canvas)),
                 (c.texture = this.texture),
                 c.anchor.set(0)),
               (c.position.x = H.width() + 20 - h.stage.position.x),
               (c.position.y = 15 - h.stage.position.y),
               (c.visible = true);
           }),
           (this.updateCache = function () {
             var e =
                 null == this.cache || null == this.cache.canvas
                   ? document.createElement("canvas")
                   : this.cache.canvas,
               t = Math.max(
                 this.passiveSortedBuffs.length,
                 this.consumableBuffs.length
               );
             (e.width = 55 * t),
               (e.height = 105),
               (this.cache = e.getContext("2d")),
               (this.cache.fillStyle = "#222"),
               (this.cache.font = "bold 16pt Calibri");
 
             for (
               var n = 0, s = 0, a = 0;
               a < this.passiveSortedBuffs.length;
               a++
             ) {
               var i = this.passiveBuffs[this.passiveSortedBuffs[a]];
               i.draw(this.cache, n, s), (n += 55);
             }
 
             (n = 0), (s = 55);
 
             for (var a = 0; a < this.consumableBuffs.length; a++) {
               var i = this.consumableBuffs[a];
               i.draw(this.cache, n, s), (n += 55);
             }
 
             this.texture && this.texture.update(),
               (this.nextCacheUpdate = Date.now() + 1e3);
           }),
           (this.markCacheForUpdate = function () {
             this.nextCacheUpdate = 0;
           });
       }
 
       let tM = 1.5 * Math.PI;
 
       function tF(e, t, n) {
         (this.id = e),
           (this.powerup = tA[e]),
           (this.startTime = Date.now()),
           (this.expireTime = n),
           (this.stack = t),
           (this.update = function (e, t) {
             (this.startTime = Date.now()),
               (this.expireTime = t),
               (this.stack = e);
           }),
           (this.getCooldown = function () {
             if (Date.now() >= this.expireTime) return 2 * Math.PI;
             return (
               2 *
               Math.min(
                 (this.expireTime - Date.now()) /
                   (this.expireTime - this.startTime),
                 1
               ) *
               Math.PI
             );
           }),
           (this.draw = function (e, t, n) {
             e.drawImage(this.powerup.image, t, n, 50, 50),
               this.stack > 1 &&
                 ((e.fillStyle = "#000"),
                 e.fillText(this.stack, t + 35, n + 17)),
               this.expireTime > 0 &&
                 (e.beginPath(),
                 e.moveTo(t + 25, n + 25),
                 e.arc(t + 25, n + 25, 25, tM, tM - this.getCooldown(), false),
                 e.closePath(),
                 (e.globalAlpha = 0.75),
                 (e.fillStyle = "#222"),
                 e.fill(),
                 (e.globalAlpha = 1));
           });
       }
 
       let tN = ["hearts"];
       var tO = [];
 
       function t8() {
         (this.delay = 0),
           (this.frames = []),
           (this.isGif = true),
           (this.push = function (e) {
             this.frames.push(e);
           }),
           (this.getFrame = function (e) {
             return this.frames[e];
           }),
           (this.getLength = function () {
             return this.frames.length;
           }),
           (this.getTexture = function () {
             return this.getFrame(Math.floor(y / this.delay) % this.getLength());
           }),
           (this.loadFromFrameData = function (e) {
             if (0 === e.length) return;
             let n = document.createElement("canvas"),
               s = n.getContext("2d"),
               a = document.createElement("canvas"),
               i = a.getContext("2d"),
               o = e[0].getImage();
 
             for (let r of ((this.delay = 10 * e[0].frameInfo.delay),
             (n.width = o.width),
             (n.height = o.height),
             (a.width = o.width),
             (a.height = o.height),
             e)) {
               s.clearRect(0, 0, n.width, n.height), s.drawImage(a, 0, 0);
               let c = r.getImage(),
                 l = c.getContext("2d");
               i.drawImage(c, 0, 0),
                 l.clearRect(0, 0, c.width, c.height),
                 l.drawImage(a, 0, 0);
               let { frameInfo: d } = r,
                 { disposal: h } = d;
               2 === h
                 ? i.clearRect(d.x, d.y, d.width, d.height)
                 : 3 === h &&
                   (i.clearRect(0, 0, a.width, a.height), i.drawImage(n, 0, 0)),
                 this.push(t.Texture.from(c));
             }
           });
       }
 
       function t6(e) {
         return tz[e % tz.length];
       }
 
       function tR(e) {
         return tG[e % tG.length];
       }
 
       function tB(e) {
         for (var t = e.length - 1; t > 0; t--) {
           var n = Math.floor(Math.random() * (t + 1)),
             s = e[t];
           (e[t] = e[n]), (e[n] = s);
         }
 
         return e;
       }
 
       for (var t3 = [], t4 = [], t1 = 0; t1 < 180; t1++) {
         var t2 = tinycolor({
             h: 2 * t1,
             s: 97.25,
             v: 100
           }),
           tH = t2.toRgb();
         (t3[t1] = (tH.r << 16) + (tH.g << 8) + tH.b),
           (t4[t1] = t2.toHexString());
       }
 
       let tz = tB(t3.slice(0)),
         tG = tB(t4.slice(0));
       ei.enabled &&
         ei.foodColors &&
         (t6 = function (e) {
           return ei.foodColors[e % ei.foodColors.length];
         });
       let tY = [
           "#FFFFFF",
           "#FF9BDC",
           "#FF00FF",
           "#FF0000",
           "#C80000",
           "#FF6900",
           "#FFFF00",
           "#00FF00",
           "#008000",
           "#008080",
           "#00FFFF",
           "#0096FF",
           "#0000FF",
           "#CA48FA",
           "#8A2BE2",
           "#D2C878",
           "#8C4614"
         ],
         tW = {};
 
       function tj(e) {
         return 0 === e || e === g.playerId
           ? "You cannot block that player."
           : Z.includes(e)
           ? (delete Z[e], "Unblocked player with ID: " + e)
           : (Z.push(e), "Blocked player with ID: " + e);
       }
 
       let t5 = {
           whisper: {
             description: "Whisper a player by ID",
             triggers: ["whisper", "t", "w"],
             action: function (e) {
               var t = parseInt(e[0]);
 
               if (isNaN(t)) {
                 g.selfMsg("Invalid player id.");
                 return;
               }
 
               var n = e.slice(1).join(" ");
               0 != n.length && g.sendPacket(new v.sendWhisper(t, n)),
                 te("/t " + t + " ");
             }
           },
           reply_whisper: {
             description: "Reply to previous whisper",
             triggers: ["reply", "r"],
             action: function (e) {
               var t = e.join(" ");
               0 != t.length && g.sendPacket(new v.sendWhisper(0, t)), te("/r ");
             }
           },
           party_chat: {
             description: "Send a message to other party members",
             triggers: ["party", "p"],
             action: function (e) {
               var t = e.join(" ");
               0 != t.length && g.sendPacket(new v.sendChat(t, 1)), te("/p ");
             }
           },
           invite: {
             description: "Invite a player to the party",
             triggers: ["invite", "i"],
             action: function (e) {
               var t = parseInt(e[0]);
               isNaN(t)
                 ? g.selfMsg("Invalid ID.")
                 : g.sendPacket(new v.sendPartyAction(0, t));
             }
           },
           leave: {
             description: "Leave your current party",
             triggers: ["leave", "l"],
             action: function () {
               g.sendPacket(new v.sendPartyAction(3, 0));
             }
           },
           promote: {
             description: "Promote a party member to leader",
             triggers: ["promote"],
             action: function (e) {
               var t = parseInt(e[0]);
               isNaN(t)
                 ? g.selfMsg("Invalid ID.")
                 : g.sendPacket(new v.sendPartyAction(2, t));
             }
           },
           kick: {
             description: "Kick a player from the party",
             triggers: ["kick"],
             action: function (e) {
               var t = parseInt(e[0]);
               isNaN(t)
                 ? g.selfMsg("Invalid ID.")
                 : g.sendPacket(new v.sendPartyAction(1, t));
             }
           },
           clear: {
             description: "Clear the chat",
             triggers: ["clear"],
             action: function () {
               for (
                 var e = document.getElementById("chat-body");
                 null != e.firstChild;
 
               )
                 e.removeChild(e.firstChild);
             }
           },
           info: {
             description: "Get your current ID",
             triggers: ["info"],
             action: function () {
               g.playerId > 0
                 ? g.selfMsg("Your id is " + g.playerId)
                 : g.selfMsg(
                     "You need to be connected to a server to use this command."
                   );
             }
           },
           scrimmenu: {
             description: "Show the scrimmage menu",
             triggers: ["scrimmenu"],
             action: function () {
               A.css("display", "none" == A.css("display") ? "block" : "none");
             }
           },
           join: {
             description: "Join a party with a code",
             triggers: ["join", "j"],
             action: function (e) {
               var t = e[0];
               null != t &&
                 0 != t.length &&
                 g.sendPacket(new v.sendPartyJoin(t));
             }
           },
           private: {
             description: "Set the party to private",
             triggers: ["private"],
             action: function () {
               g.sendPacket(new v.sendPartyAction(4, 1));
             }
           },
           public: {
             description: "Allow players to join the party without an invite",
             triggers: ["public"],
             action: function () {
               g.sendPacket(new v.sendPartyAction(4, 0));
             }
           },
           reset_chat: {
             description: "Reset chat size",
             triggers: ["resetchat"],
             action: function () {
               $("#chat-panel").css("width", "360px"),
                 $("#chat-panel").css("height", "250px");
             }
           },
           reset_chat_tabs: {
             description: "Reset chat tab settings",
             triggers: ["resetchattabs"],
             action: function () {
               (eh._ChatTabs = JSON.parse(JSON.stringify(el))), ta(), tn();
             }
           },
           spectate: {
             description: "Spectate a player",
             triggers: ["spectate", "s"],
             action: function (e) {
               var t = parseInt(e[0]);
               isNaN(t)
                 ? g.selfMsg("Invalid ID.")
                 : g.sendPacket(new v.sendSpectate(t));
             }
           },
           disconnect: {
             description: "Disconnect from the server",
             triggers: ["disconnect"],
             action: function () {
               g.disconnect();
             }
           },
           account: {
             description: "Get Account UID",
             triggers: ["account"],
             action: function () {
               if (null === V) {
                 g.selfMsg("You are not logged in.");
                 return;
               }
 
               g.selfMsg("UID: " + V.uid);
             }
           },
           block: {
             description: "Block or unblock a player by ID",
             triggers: ["block", "b"],
             action: function (e) {
               var t = parseInt(e[0]);
 
               if (!isNaN(t)) {
                 var n = tj(t);
                 g.selfMsg(n);
               }
             }
           }
         },
         t7 = [
           "4Head",
           "BibleThump",
           "DansGame",
           "DatSheffy",
           "FailFish",
           "FeelsBadMan",
           "FeelsGoodMan",
           "FeelsMadMan",
           "GabeN",
           "HassanChop",
           "HeyGuys",
           "Kappa",
           "KappaPride",
           "Keepo",
           "Kreygasm",
           "NotLikeThis",
           "OMGScoots",
           "PJSalt",
           "PogChamp",
           "rekt",
           "rip",
           "SaltyCorn",
           "sodaC",
           "sodaHeyGuys",
           "sodaNOPE",
           "sodaW",
           "SwiftRage",
           "WutFace",
           "ResidentSleeper",
           "LUL",
           "MikuFail",
           "PepoHype",
           "KKona",
           "MeguFace",
           "AngryBork",
           "AngeryBOYE",
           "TohruFlex",
           "Sadness",
           "nou",
           "MarioFP"
         ],
         tV = [
           "Ditto",
           "MichaelPls",
           "RareParrot",
           "PepePls",
           "RooNoticeMe",
           "PepeEyes",
           "EverythingsFine",
           "WeSmart",
           "PandaAww",
           "SleepyCat",
           "Clap"
         ],
         tK = [
           "0",
           "1",
           "2",
           "3",
           "4",
           "5",
           "6",
           "7",
           "8",
           "9",
           "A",
           "B",
           "C",
           "D",
           "E",
           "F"
         ],
         tX = [
           "",
           "MOUSE1",
           "MOUSE2",
           "MOUSE3",
           "MOUSE4",
           "MOUSE5",
           "HELP",
           "",
           "BACK_SPACE",
           "TAB",
           "",
           "",
           "CLEAR",
           "ENTER",
           "ENTER_SPECIAL",
           "",
           "SHIFT",
           "CONTROL",
           "ALT",
           "PAUSE",
           "CAPS_LOCK",
           "KANA",
           "EISU",
           "JUNJA",
           "FINAL",
           "HANJA",
           "",
           "ESCAPE",
           "CONVERT",
           "NONCONVERT",
           "ACCEPT",
           "MODECHANGE",
           "SPACE",
           "PAGE_UP",
           "PAGE_DOWN",
           "END",
           "HOME",
           "LEFT",
           "UP",
           "RIGHT",
           "DOWN",
           "SELECT",
           "PRINT",
           "EXECUTE",
           "PRINTSCREEN",
           "INSERT",
           "DELETE",
           "",
           "0",
           "1",
           "2",
           "3",
           "4",
           "5",
           "6",
           "7",
           "8",
           "9",
           ":",
           ";",
           "<",
           "=",
           ">",
           "?",
           "AT",
           "A",
           "B",
           "C",
           "D",
           "E",
           "F",
           "G",
           "H",
           "I",
           "J",
           "K",
           "L",
           "M",
           "N",
           "O",
           "P",
           "Q",
           "R",
           "S",
           "T",
           "U",
           "V",
           "W",
           "X",
           "Y",
           "Z",
           "OS_KEY",
           "",
           "CONTEXT_MENU",
           "",
           "SLEEP",
           "NUMPAD0",
           "NUMPAD1",
           "NUMPAD2",
           "NUMPAD3",
           "NUMPAD4",
           "NUMPAD5",
           "NUMPAD6",
           "NUMPAD7",
           "NUMPAD8",
           "NUMPAD9",
           "MULTIPLY",
           "ADD",
           "SEPARATOR",
           "SUBTRACT",
           "DECIMAL",
           "DIVIDE",
           "F1",
           "F2",
           "F3",
           "F4",
           "F5",
           "F6",
           "F7",
           "F8",
           "F9",
           "F10",
           "F11",
           "F12",
           "F13",
           "F14",
           "F15",
           "F16",
           "F17",
           "F18",
           "F19",
           "F20",
           "F21",
           "F22",
           "F23",
           "F24",
           "",
           "",
           "",
           "",
           "",
           "",
           "",
           "",
           "NUM_LOCK",
           "SCROLL_LOCK",
           "WIN_OEM_FJ_JISHO",
           "WIN_OEM_FJ_MASSHOU",
           "WIN_OEM_FJ_TOUROKU",
           "WIN_OEM_FJ_LOYA",
           "WIN_OEM_FJ_ROYA",
           "",
           "",
           "",
           "",
           "",
           "",
           "",
           "",
           "",
           "CIRCUMFLEX",
           "EXCLAMATION",
           "DOUBLE_QUOTE",
           "HASH",
           "DOLLAR",
           "PERCENT",
           "AMPERSAND",
           "UNDERSCORE",
           "OPEN_PAREN",
           "CLOSE_PAREN",
           "ASTERISK",
           "PLUS",
           "PIPE",
           "HYPHEN_MINUS",
           "OPEN_CURLY_BRACKET",
           "CLOSE_CURLY_BRACKET",
           "TILDE",
           "",
           "",
           "",
           "",
           "VOLUME_MUTE",
           "VOLUME_DOWN",
           "VOLUME_UP",
           "",
           "",
           "SEMICOLON",
           "EQUALS",
           "COMMA",
           "MINUS",
           "PERIOD",
           "SLASH",
           "BACK_QUOTE",
           "",
           "",
           "",
           "",
           "",
           "",
           "",
           "",
           "",
           "",
           "",
           "",
           "",
           "",
           "",
           "",
           "",
           "",
           "",
           "",
           "",
           "",
           "",
           "",
           "",
           "",
           "OPEN_BRACKET",
           "BACK_SLASH",
           "CLOSE_BRACKET",
           "QUOTE",
           "",
           "META",
           "ALTGR",
           "",
           "WIN_ICO_HELP",
           "WIN_ICO_00",
           "",
           "WIN_ICO_CLEAR",
           "",
           "",
           "WIN_OEM_RESET",
           "WIN_OEM_JUMP",
           "WIN_OEM_PA1",
           "WIN_OEM_PA2",
           "WIN_OEM_PA3",
           "WIN_OEM_WSCTRL",
           "WIN_OEM_CUSEL",
           "WIN_OEM_ATTN",
           "WIN_OEM_FINISH",
           "WIN_OEM_COPY",
           "WIN_OEM_AUTO",
           "WIN_OEM_ENLW",
           "WIN_OEM_BACKTAB",
           "ATTN",
           "CRSEL",
           "EXSEL",
           "EREOF",
           "PLAY",
           "ZOOM",
           "",
           "PA1",
           "WIN_OEM_CLEAR",
           ""
         ];
       var tJ = [
           "heart",
           "star",
           "home",
           "apple",
           "spiral",
           "dice",
           "chicken",
           "ghost",
           "burger",
           "bow",
           "cloud",
           "skull",
           "mug",
           "flower",
           "music",
           "checkmark",
           "clover",
           "crown",
           "fancy",
           "fish",
           "flower2",
           "lightning",
           "paw",
           "duck",
           "snowflake",
           "bomb",
           "butterfly",
           "cherry",
           "watermelon"
         ],
         tZ = null;
 
       function tq(e) {
         return tK[(e >> 4) & 15] + tK[15 & e];
       }
 
       function tQ(e) {
         if (e <= 0) return "0:00";
         var t = Math.floor(e / 3600),
           n = Math.floor((e - 3600 * t) / 60),
           s = e - 3600 * t - 60 * n;
         return (
           n < 10 && t > 0 && (n = "0" + n),
           s < 10 && (s = "0" + s),
           (t > 0 ? t + ":" : "") + n + ":" + s
         );
       }
 
       function t9(e) {
         var t = e.toString().split(".");
         return (t[0] = t[0].replace(/B(?=(d{3})+(?!d))/g, ",")), t.join(".");
       }
 
       function ne(e) {
         if (
           (0 === e.indexOf("#") && (e = e.slice(1)),
           3 === e.length && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]),
           6 !== e.length)
         )
           throw Error("Invalid HEX color.");
         var t = parseInt(e.slice(0, 2), 16),
           n = parseInt(e.slice(2, 4), 16),
           s = parseInt(e.slice(4, 6), 16);
         return 0.299 * t + 0.587 * n + 0.114 * s > 186 ? "#000000" : "#FFFFFF";
       }
 
       function nt(e) {
         if (e.dataTransfer.items) {
           for (var t = 0; t < e.dataTransfer.items.length; t++)
             if ("file" === e.dataTransfer.items[t].kind)
               return e.dataTransfer.items[t].getAsFile();
         } else for (var t = 0; t < e.dataTransfer.files.length; t++) return e.dataTransfer.files[t];
       }
 
       function nn(e) {
         return !!e.match(nn.regex);
       }
 
       nn.regex =
         /^\s*data:([a-z]+\/[a-z]+(;[a-z\-]+\=[a-z\-]+)?)?(;base64)?,[a-z0-9\!\$\&\'\,\(\)\*\+\,\;\=\-\.\_\~\:\@\/\?\%\s]*\s*$/i;
       let ns = {
           ALL: 3,
           PARTY: 2,
           SELF: 1,
           NONE: 0
         },
         na = {
           DEFAULT: 0,
           SHORT: 1
         },
         ni = {
           THICK: 9,
           THIN: 2,
           NONE: 0
         },
         no = {
           ULTRA: 1,
           HIGH: 0.8,
           MEDIUM: 0.7,
           LOW: 0.5,
           VERYLOW: 0.25
         },
         nr = {
           MAP: 0,
           MODE: 1,
           SIZE: 2,
           STARTMASS: 3,
           LOCK: 4,
           PLAYER_UPDATE: 5,
           PLAYER_LIST: 6,
           VIRUS_DENSITY: 7,
           PUBLIC: 8,
           PASSWORD: 9,
           NAME: 10,
           RESPAWN_DELAY: 11,
           AUTOSPLIT: 12
         },
         nc = {
           0: "Spectator",
           1: "Blue",
           2: "Red",
           3: "Green",
           4: "Yellow",
           5: "Purple",
           6: "Orange",
           7: "Pink",
           8: "Brown"
         },
         nl = {
           FAILURE: 1,
           SUCCESS: 0
         },
         nd = {
           ERROR: -1,
           NOT_LOADED: 0,
           LOADING: 1,
           LOADED: 2
         },
         nh = {
           ALL: 1,
           PARTY: 2,
           WHISPER: 4,
           SYSTEM: 8,
           ADMIN: 16
         },
         np = {
           UNKNOWN: -1,
           ALIVE: 0,
           DEAD: 1,
           SPECTATE: 2
         };
       var nu = ["white", "#25f", "#f31", "green", "yellow", "purple", "orange"];
 
       function nf(e, t, n) {
         (this.font = e), (this.size = t), (this.outlineColor = n || "#000");
       }
 
       let nm = {
           0: new nf("Verdana", 54),
           1: new nf("ampad", 75),
           2: new nf("burnstown", 81),
           3: new nf("chlorinar", 75),
           4: new nf("Facon", 75),
           5: new nf("archistico", 75),
           6: new nf("breakaway", 81),
           7: new nf("conformity", 81),
           8: new nf("electroharmonix", 70),
           9: new nf("PWJoyeuxNoel", 70),
           10: new nf("leckerli-one", 75),
           101: new nf("IceCaps", 81, "#00c9ff"),
           102: new nf("BrazierFlame", 81, "#e25822")
         },
         ng = nm[0];
 
       for (var nv in nm) {
         var n$ = nm[nv];
         new FontFaceObserver(n$.font).load(null, 1e4).then(
           () => {},
           () => {}
         ),
           nv > 0 &&
             nv < 64 &&
             $("#spNameFont").append(
               '<option value="' +
                 nv +
                 '" style="font-family:' +
                 n$.font +
                 '">' +
                 n$.font.charAt(0).toUpperCase() +
                 n$.font.slice(1) +
                 "</option>"
             );
       }
 
       $(window).focus(function () {
         ee = true;
       }),
         $(window).blur(function () {
           ee = false;
         });
       var ny = new (function () {
           (this.consented = false),
             (this.policyID = "CP_0918_01"),
             (this.policyLink =
               "https://gota.io/policies/privacy.html?v=" +
               this.policyID +
               "#cookies"),
             (this.consentOption = $("#cc_acceptCookies")),
             (this.consentCookie = {
               name: "cookieConsent",
               value: "yes+" + this.policyID,
               exdays: 730,
               path: "/web"
             }),
             (this.cookieBanner = {
               banner: $("#cookie-banner"),
               decline: $("#declineCookies"),
               accept: $("#acceptCookies"),
               handlersBound: false
             }),
             (this.init = function () {
               this.backwardsCompatable(),
                 this.consentOption.on("change", function () {
                   ny.consentHandler($(this).prop("checked"));
                 }),
                 this.getConsentCookie() === this.consentCookie.value
                   ? (this.consentHandler(true), this.showCookieBanner(false))
                   : (this.consentHandler(false), this.showCookieBanner(true));
             }),
             (this.consentHandler = function (e) {
               (this.consented = e),
                 (aiptag.consented = e),
                 this.consentOption.prop("checked", e),
                 e
                   ? (this.createConsentCookie(),
                     this.showCookieBanner(false),
                     (function () {
                       if (ny.consented) {
                         var e = window.localStorage.getItem("theme");
                         e && tP(e);
                         var t = window.localStorage.getItem("keybinds");
                         if (t)
                           for (var n in (t = JSON.parse(t)))
                             null != t[n] &&
                               Number.isInteger(t[n]) &&
                               ((ep[n] = t[n]), eG($("#" + n)));
                         var s = window.localStorage.getItem("options");
                         if (s)
                           for (var a in ((s = JSON.parse(s)), eh))
                             a in s == false && (s[a] = eh[a]);
                         else s = eh;
 
                         for (var a in s) {
                           var i = a.charAt(0);
 
                           if ("c" == i) {
                             if (true == s[a]) {
                               var o = $("#" + a);
                               o.prop("checked", s[a]), tb(o);
                             }
                           } else if ("s" == i) {
                             var r = $("#" + a);
                             r.val(s[a]), tk(r);
                           } else
                             "i" == i
                               ? (eh[a] = s[a])
                               : "r" == i
                               ? ((eh[a] = s[a]),
                                 $("#" + a).val(eh[a]),
                                 tC($("#" + a)))
                               : (eh[a] = s[a]);
                         }
 
                         $("#chat-panel").css("width", eh.iChatWidth),
                           $("#chat-panel").css("height", eh.iChatHeight),
                           eh.cThemeEnabled || t_("cThemeEnabled");
                         var c = window.localStorage.getItem("name");
                         null != c && $("#name-box").val(c);
                         var l = window.localStorage.getItem("subpanel");
                         if (l)
                           for (var a in (l = JSON.parse(l)))
                             l[a] && 0 != l[a].length && (eb[a] = l[a]);
                         (eb.lockedName = ""), eV();
                       }
                     })(),
                     eV(),
                     $("#spNameColor").spectrum({
                       color: eb.nameColor,
                       showAlpha: false,
                       showInput: true,
                       preferredFormat: "rgb"
                     }),
                     $("#spChatColor").spectrum({
                       showPaletteOnly: true,
                       showPalette: true,
                       color: tY[eb.chatColor],
                       palette: tY
                     }),
                     $("#spSkinName").val(eb.skinName),
                     $("#spLowerName").prop("checked", eb.lowerName),
                     $("#spEffect select").val(eb.effect),
                     $("#spNameFont select").val(eb.nameFont),
                     $("#btn-chg-ln").on("click", function () {
                       if (Y) {
                         var e = prompt("Enter new locked name!");
 
                         if (e) {
                           var t = null;
 
                           if (
                             ("string" != typeof e &&
                               (t = "Please enter a valid name!"),
                             e.length < 2 &&
                               (t =
                                 "Locked names must be 2 or more characters long."),
                             e.length > 20 &&
                               (t =
                                 "Locked names must be 20 or less characters long."),
                             null !== t)
                           ) {
                             alert(t);
                             return;
                           }
 
                           confirm(
                             "You are about to change your locked name to: '" +
                               (e = e.trim()) +
                               `'.
 Locked names can only be changed once per week.
 
 Are you sure you wish to continue?`
                           ) && g.sendPacket(new v.sendLockedNameChange(e));
                         }
                       }
                     }),
                     $("#btn-updateSP").on("click", function () {
                       e7();
                     }),
                     $("#btn-subpanel-rules").on("click", function () {
                       (eb.rules = true), eV();
                     }),
                     $("#no_cookie_consent").hide(),
                     "none" !== $("#account-loader").css("display")
                       ? $("#guest").hide()
                       : $("#guest").show())
                   : (this.deleteConsentCookie(),
                     null !== firebase.auth().currentUser &&
                       firebase
                         .auth()
                         .signOut()
                         .then(function () {})
                         .catch(() => {}),
                     $("#authed").hide(),
                     $("#account-loader").hide(),
                     $("#guest").hide(),
                     $("#no_cookie_consent").show(),
                     this.showCookieBanner(true));
             }),
             (this.showCookieBanner = function (e) {
               e
                 ? (this.cookieBanner.handlersBound ||
                     (this.bindBannerHandlers(),
                     (this.cookieBanner.handlersBound = true)),
                   this.cookieBanner.banner.slideDown())
                 : this.cookieBanner.banner.slideUp();
             }),
             (this.bindBannerHandlers = function () {
               this.cookieBanner.decline.on("click", function () {
                 ny.consentHandler(false), ny.showCookieBanner(false);
               }),
                 this.cookieBanner.accept.on("click", function () {
                   ny.consentHandler(true), ny.showCookieBanner(false);
                 }),
                 $("#cookie-banner .description").append(
                   ' <a href="' +
                     this.policyLink +
                     '" target="_blank">Our Cookie Policy!</a>'
                 );
             }),
             (this.createConsentCookie = function () {
               var e = new Date();
               e.setTime(e.getTime() + 864e5 * this.consentCookie.exdays);
               var t = "expires=" + e.toUTCString();
               document.cookie =
                 this.consentCookie.name +
                 "=" +
                 this.consentCookie.value +
                 ";" +
                 t +
                 ";path=" +
                 this.consentCookie.path +
                 ";";
             }),
             (this.deleteConsentCookie = function () {
               document.cookie =
                 this.consentCookie.name +
                 "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=" +
                 this.consentCookie.path +
                 ";";
             }),
             (this.getConsentCookie = function () {
               for (
                 var e = this.consentCookie.name + "=",
                   t = decodeURIComponent(document.cookie).split(";"),
                   n = 0;
                 n < t.length;
                 n++
               ) {
                 for (var s = t[n]; " " == s.charAt(0); ) s = s.substring(1);
 
                 if (0 == s.indexOf(e)) return s.substring(e.length, s.length);
               }
 
               return false;
             }),
             (this.backwardsCompatable = function () {
               for (
                 var e = "cookieconsent_status=",
                   t = decodeURIComponent(document.cookie).split(";"),
                   n = null,
                   s = 0;
                 s < t.length;
                 s++
               ) {
                 for (var a = t[s]; " " == a.charAt(0); ) a = a.substring(1);
 
                 0 == a.indexOf(e) && (n = a.substring(e.length, a.length));
               }
 
               "allow" === n && this.createConsentCookie(),
                 (document.cookie =
                   "cookieconsent_status=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/web;");
             });
         })(),
         nb = new (function () {
           (this.playCounter = 0),
             (this.deathCounter = 0),
             (this.incrementPlay = function () {
               return this.playCounter++, this.playCounter % 5 == 1;
             });
         })();
       "undefined" != typeof aipPlayer &&
         aiptag.cmd.player.push(function () {
           adplayer = new aipPlayer({
             AD_WIDTH: 960,
             AD_HEIGHT: 540,
             AD_CENTERPLAYER: false,
             LOADING_TEXT: "Advertisement Loading...",
             PREROLL_ELEM: document.getElementById("preroll"),
             AIP_COMPLETE: function () {
               g.spectate ? g.spec() : g.play();
             }
           });
         }),
         (function () {
           (u = document.getElementById("canvas")),
             (m = (f = document.getElementById("minimap-canvas")).getContext(
               "2d"
             )),
             (E = $("#main")),
             (x = $("#party-panel")),
             (T = $(".hud-panel")),
             (H = $("#score-panel")),
             (A = $("#main-scrimmage")),
             (D = $("#context-menu")),
             $("#chat-input"),
             (I = $("#leaderboard-header")),
             (B = $("#scrimmage-custom")),
             (en.mouseFrozenDiv = $("#score-mouse")),
             (en.playerScore = $("#playerScore")),
             (en.playerCells = $("#playerCells")),
             (en.playerFps = $("#playerFps")),
             (en.resetInfo = $("#extra-reset-timer")),
             (en.resetTime = $("#resetTime")),
             (en.respawnInfo = $("#extra-respawn-cooldown")),
             (en.respawnCooldown = $("#respawnCooldown")),
             (en.spectatorCount = $("#spectatorCount")),
             (en.playerCellCount = 0),
             (en.minimapCoords = $("#minimap-coordinates")),
             (en.partyPanel = x),
             (en.friendOnlineCount = $("#social-online-friends-count")),
             ty(),
             (L = false),
             (window.onmousemove = function (e) {
               (g.mouseRawX = e.clientX), (g.mouseRawY = e.clientY);
             }),
             (window.onkeydown = function (e) {
               var t = e.which || e.keyCode || e.charCode;
 
               if (!(t <= 5)) {
                 if (eu) {
                   ez(t), e.preventDefault();
                   return;
                 }
 
                 $("input").is(":focus") ||
                   (27 == t &&
                     (tg(E),
                     tv(
                       $("#popup-profile") || tv($("#popup-account-username"))
                     ) &&
                       (tm($("#popup-profile")),
                       tm($("#popup-account-username")))),
                   "none" == E.css("display") && g.handleKey(t));
               }
             }),
             (window.onkeyup = function (e) {
               (e.which || e.keyCode || e.charCode) == ep.kEjectMass &&
                 ((L = false), g && g.sendPacket(new v.sendEjectMass(false)));
             }),
             (window.onmousedown = function (e) {
               var t = e.button + 1;
 
               if (eu) {
                 ez(t), e.preventDefault();
                 return;
               }
 
               $("input").is(":focus") ||
                 "none" != E.css("display") ||
                 g.handleKey(t);
             }),
             (window.onmouseup = function (e) {
               e.button + 1 == ep.kEjectMass &&
                 ((L = false), g && g.sendPacket(new v.sendEjectMass(false)));
             }),
             (window.onblur = function () {
               L &&
                 eh.cDisablePersistEjectMass &&
                 ((L = false), g && g.sendPacket(new v.sendEjectMass(false)));
             }),
             $(document).on("wheel", function (e) {
               "none" == E.css("display") &&
                 "canvas" == e.target.id &&
                 ((e.originalEvent.wheelDelta || -1 * e.originalEvent.deltaY) > 0
                   ? (g.mouseZoom *= 1.1)
                   : (g.mouseZoom *= 0.9),
                 (g.mouseZoom =
                   g.mouseZoom > 5 ? 5 : g.mouseZoom < 0.1 ? 0.1 : g.mouseZoom));
             }),
             document.addEventListener("contextmenu", function (e) {
               e.preventDefault();
             }),
             eY(),
             (function () {
               for (var e in (eW(), (M = {}), (gifEmoteList = {}), t7)) {
                 var n = t7[e];
                 $(".emote-list").append(
                   "<li><img name='" +
                     n +
                     "' title='" +
                     n +
                     "' src='https://gota.io/emotes/" +
                     n +
                     ".png' /></li>"
                 ),
                   (M[n] = true);
               }
 
               for (var e in tV) {
                 var n = tV[e];
                 $(".gif-list").append(
                   "<li><img name='" +
                     n +
                     "' title='" +
                     n +
                     "' src='https://gota.io/emotes/gifs/" +
                     n +
                     ".gif' /></li>"
                 ),
                   (gifEmoteList[n] = true);
               }
 
               for (var e = 0; e < tJ.length; e++) {
                 var s = tJ[e];
                 $("#spEffect").append(
                   '<option value="' +
                     (e + 1) +
                     '">' +
                     s.charAt(0).toUpperCase() +
                     s.slice(1) +
                     "</option>"
                 );
                 var a = new Image();
                 (a.src = "images/ejectedmass_skins/" + s + ".png"), (tJ[e] = a);
               }
 
               ei.enabled &&
                 ei.customEjectedMass &&
                 ((tZ = new Image()).src =
                   "images/events/" + ei.key + "/ejected_mass.png"),
                 (function () {
                   for (var e in tA) {
                     var n = tA[e],
                       s = "images/powerups/" + n.img + ".png",
                       a = new Image();
                     a.addEventListener(
                       "load",
                       function (e, n) {
                         e.texture = t.Texture.from(n);
                       }.bind(null, n, a)
                     ),
                       (a.src = s),
                       (n.image = a);
                   }
 
                   (d = t.Texture.from("images/shield.png")),
                     (l = t.Texture.from("images/debuff.png"));
                 })();
 
               for (var e = 0; e < tN.length; e++) {
                 var i = e;
                 gifFrames({
                   url: "images/effects/" + tN[i] + ".gif",
                   frames: "all",
                   cumulative: false,
                   outputType: "canvas"
                 }).then(function (e) {
                   var t = new t8();
                   t.loadFromFrameData(e), (tO[i] = t);
                 });
               }
             })();
           var s = window.location.href.split("#").slice(1).join("#").split("&"),
             a = "";
 
           function i(e) {
             jQuery.ajax({
               type: "POST",
               dataType: "json",
               url: ea + "/api/v1/utilities/servers",
               success: function (t) {
                 for (var n of t) {
                   var s = [];
 
                   for (var a of n.servers) {
                     (a.players = parseInt(a.players)), (a.bots = a.bots || 0);
                     var i = a.players + a.bots + "/" + a.playersMax;
                     a.bots > 0 && (i += "*");
                     var o = new eX(
                       a.name,
                       a.address,
                       a.players,
                       a.bots,
                       i,
                       a.gamemode,
                       n.region,
                       a.ssl,
                       a.order
                     );
                     s.push(o);
                   }
 
                   s.sort((e, t) => e.order - t.order), (eo[n.region] = {});
 
                   for (var r = 0; r < s.length; r++) {
                     var o = s[r];
                     eo[n.region][o.name] = o;
                   }
                 }
 
                 eJ(), null != e ? e() : null != P && eq(P.name);
               },
               error: function () {
                 eJ();
               }
             });
           }
 
           function o() {
             if (null != P) {
               eq(P.name);
               return;
             }
 
             eQ("eu"), eq("Vendetta");
           }
 
           s[0] && (a = s[0].toLowerCase()),
             s[1] && (F = s[1]),
             null != a && "" != a
               ? ((a = a[0].toUpperCase() + a.slice(1)),
                 (eC = function () {
                   var e = null;
                   null != (e = eZ(a)) ? (eq(e.name), eQ(e.region)) : o();
                 }))
               : (eC = o),
             firebase
               .database()
               .ref("/game")
               .on("value", function (e) {
                 var t = e.val();
 
                 for (var n in (t.version !== version &&
                   g.selfMsg(
                     "Woah! Version " +
                       t.version +
                       " is now available. Press Ctrl+R to update!"
                   ),
                 z != t.motd &&
                   "" !== t.motd &&
                   ((z = t.motd), g.selfMsg(t.motd)),
                 t.listRefresh != e_ &&
                   ((e_ = t.listRefresh),
                   (eo = {}),
                   i(eC),
                   clearInterval(ek),
                   (ek = setInterval(() => {
                     i();
                   }, t.listRefresh))),
                 t.titles))
                   tW[n] = t.titles[n];
               }),
             (b = {}),
             (k = {}),
             (function () {
               function t(e, t) {
                 if (e) {
                   $(t).prop("disabled", false), $(t).text("Set");
                   return;
                 }
 
                 $(t).prop("disabled", true), $(t).text("...");
               }
 
               ei.enabled &&
                 !eh.cDisableEventSkins &&
                 $("body").toggleClass("event-" + ei.key),
                 $(".server-tab").on("click", function () {
                   var e = $(this).attr("region");
                   eQ(e);
                 }),
                 $("#btn-play").on("click", function () {
                   if (!(null == P || Date.now() < G)) {
                     if (
                       0 != Object.keys(g.myCells).length &&
                       this.currentServerName == P.name
                     ) {
                       tm(E);
                       return;
                     }
 
                     (g.spectate = false),
                       nb.incrementPlay() && "undefined" != typeof adplayer
                         ? (aiptag.cmd.player.push(function () {
                             adplayer.startPreRoll();
                           }),
                           tm(E),
                           ty(),
                           (G = Date.now() + 2e3))
                         : g.play();
                   }
                 }),
                 $("#btn-servers").on("click", function () {
                   e("main-servers");
                 }),
                 $("#btn-options").on("click", function () {
                   e("main-options");
                 }),
                 $("#btn-hotkeys").on("click", function () {
                   e("main-hotkeys");
                 }),
                 $("#btn-themes").on("click", function () {
                   e("main-themes");
                 }),
                 $("#btn-cellpanel").on("click", function () {
                   e("main-subpanel");
                 }),
                 $("#btn-reddit").on("click", function () {
                   window.open("https://www.reddit.com/r/PlayGotaIO/", "_blank");
                 }),
                 $("#btn-discord").on("click", function () {
                   window.open("https://gota.io/discord", "_blank");
                 }),
                 $("#name-box").keypress(function (e) {
                   13 == e.keyCode && $(this).is(":focus") && g.play();
                 }),
                 $("#btn-spec").on("click", function () {
                   if (!(null == P || Date.now() < G)) {
                     if (g.spectate && this.currentServerName == P.name) {
                       tm(E);
                       return;
                     }
 
                     (g.spectate = true),
                       nb.incrementPlay() && "undefined" != typeof adplayer
                         ? (aiptag.cmd.player.push(function () {
                             adplayer.startPreRoll();
                           }),
                           tm(E),
                           ty(),
                           (G = Date.now() + 2e3))
                         : g.spec();
                   }
                 }),
                 $("#chat-input").keyup(function (e) {
                   var t,
                     n,
                     s,
                     a,
                     i = $(this).val(),
                     o = i.split(" ");
                   if (
                     (13 == e.keyCode &&
                       $(this).is(":focus") &&
                       (0 == (t = $(this).val()).length ||
                         ("/" == t.charAt(0)
                           ? ((s = (n = t.split(" "))[0].substring(1)),
                             te(""),
                             (a = false),
                             Object.keys(t5).findIndex((e) => {
                               t5[e].triggers.findIndex(
                                 (e) => e.toUpperCase() === s.toUpperCase()
                               ) > -1 &&
                                 false == a &&
                                 (t5[e].action(n.slice(1)), (a = true));
                             }),
                             false == a && g.selfMsg("Invalid command!"))
                           : (g.sendPacket(new v.sendChat(t, 0)), te("")))),
                     0 == i.length || i.endsWith(" ") || 13 == e.keyCode)
                   )
                     $("#autocomplete-panel").html(""),
                       $("#autocomplete-panel").hide();
                   else if (i.startsWith("/")) {
                     if (o.length > 1) return;
                     $("#autocomplete-panel").html(
                       "<table><thead><tr><th>Command</th><th>Aliases</th><th>Description</th></tr></thead><tbody></tbody></table>"
                     );
                     var r = -1;
                     Object.values(t5).map((e) => {
                       (r = e.triggers.findIndex((e) =>
                         e
                           .toLowerCase()
                           .startsWith(o[0].substring(1).toLowerCase())
                       )) > -1 &&
                         $("#autocomplete-panel tbody").append(
                           "<tr><td>" +
                             e.triggers[r] +
                             "</td><td>" +
                             e.triggers +
                             "</td><td>" +
                             e.description +
                             "</td></tr>"
                         );
                     }),
                       0 == $("#autocomplete-panel tbody").children().length
                         ? $("#autocomplete-panel").hide()
                         : $("#autocomplete-panel").show();
                   } else if (o[o.length - 1].startsWith(":")) {
                     $("#autocomplete-panel").html("");
                     var c = Object.keys(M).filter((e) =>
                         e
                           .toLowerCase()
                           .includes(o[o.length - 1].substring(1).toLowerCase())
                       ),
                       l = Object.keys(gifEmoteList).filter((e) =>
                         e
                           .toLowerCase()
                           .includes(o[o.length - 1].substring(1).toLowerCase())
                       );
 
                     if (0 === c.length && 0 === l.length) {
                       $("#autocomplete-panel").html(""),
                         $("#autocomplete-panel").hide();
                       return;
                     }
 
                     $("#autocomplete-panel").show(),
                       c.length > 0 &&
                         ($("#autocomplete-panel").append("<h3>Emotes</h3>"),
                         c.forEach((e) => {
                           $("#autocomplete-panel").append(
                             "<img name='" +
                               e +
                               "' title='" +
                               e +
                               "' src='https://gota.io/emotes/" +
                               e +
                               ".png' />"
                           );
                         })),
                       l.length > 0 &&
                         ($("#autocomplete-panel").append("<h3>Gifs</h3>"),
                         l.forEach((e) => {
                           $("#autocomplete-panel").append(
                             "<img name='" +
                               e +
                               "' title='" +
                               e +
                               "' src='https://gota.io/emotes/gifs/" +
                               e +
                               ".gif' />"
                           );
                         }));
                   }
                 }),
                 $("#autocomplete-panel").on("click", function (e) {
                   var t = tt().split(" ");
                   "TD" === e.target.nodeName
                     ? (te(
                         "/" + e.target.parentElement.children[0].innerHTML + " "
                       ),
                       $("#autocomplete-panel").html(""),
                       $("#autocomplete-panel").hide(),
                       $("#chat-input").focus())
                     : "IMG" === e.target.nodeName &&
                       (te(
                         tt().substring(
                           0,
                           tt().length - t[t.length - 1].length
                         ) +
                           e.target.attributes.name.nodeValue +
                           " "
                       ),
                       $("#autocomplete-panel").html(""),
                       $("#autocomplete-panel").hide(),
                       $("#chat-input").focus());
                 }),
                 $("#animationDelay").on("change", function () {
                   var e = parseInt($(this).val());
                   isNaN(e) && (e = 90),
                     (eh.rAnimationDelay = Math.min(Math.max(e, 1), 250)),
                     $("#animationDelay").val(eh.rAnimationDelay),
                     $("#rAnimationDelay").val(eh.rAnimationDelay);
                 }),
                 $("#viewDistance").on("change", function () {
                   var e = parseInt($(this).val());
                   isNaN(e) && (e = 100),
                     (eh.rViewDistance = Math.min(Math.max(e, 50), 150)),
                     $("#viewDistance").val(eh.rViewDistance),
                     $("#rViewDistance").val(eh.rViewDistance),
                     g.sendOptions();
                 }),
                 $("#uiScale").on("change", function () {
                   var e = parseInt($(this).val());
                   isNaN(e) && (e = 100),
                     (e *= 0.01),
                     (eh.rUiScale = Math.min(Math.max(e, 0.5), 1.25)),
                     $("#uiScale").val(
                       Number.parseFloat(100 * eh.rUiScale).toFixed(0)
                     ),
                     $("#rUiScale").val(eh.rUiScale),
                     $(".ui-scale").css(
                       "transform",
                       "scale(" + eh.rUiScale + ")"
                     );
                 }),
                 $("#chat-emote-btn").css(
                   "background-image",
                   "url(https://gota.io/emotes/" +
                     t7[Math.floor(Math.random() * t7.length)] +
                     ".png)"
                 ),
                 $("#chat-emote-btn").on("click", function () {
                   $("#emote-panel").toggle();
                 }),
                 $("#emote-panel ul li img").on("click", function (e) {
                   var t;
                   (t = e.target.name + " "),
                     $("#chat-input").val(tt() + t),
                     $("#chat-input").focus();
                 }),
                 (function () {
                   var e,
                     t,
                     n,
                     s,
                     a = document.getElementById("chat-panel");
 
                   function i(i) {
                     (a.style.width = n + i.clientX - e + "px"),
                       (a.style.height = s - (i.clientY - t) + "px");
                   }
 
                   function o() {
                     document.documentElement.removeEventListener(
                       "mousemove",
                       i,
                       false
                     ),
                       document.documentElement.removeEventListener(
                         "mouseup",
                         o,
                         false
                       );
                   }
 
                   document.getElementById("chat-resize").addEventListener(
                     "mousedown",
                     function (r) {
                       (e = r.clientX),
                         (t = r.clientY),
                         (n = parseInt(
                           document.defaultView.getComputedStyle(a).width,
                           10
                         )),
                         (s = parseInt(
                           document.defaultView.getComputedStyle(a).height,
                           10
                         )),
                         document.documentElement.addEventListener(
                           "mousemove",
                           i,
                           false
                         ),
                         document.documentElement.addEventListener(
                           "mouseup",
                           o,
                           false
                         );
                     },
                     false
                   );
                 })(),
                 $(".checkbox-options").on("change", function () {
                   tb($(this));
                 }),
                 $(".options-container select").on("change", function () {
                   tk($(this));
                 }),
                 $(".options-container input[type=range]").on(
                   "change",
                   function () {
                     tC($(this));
                   }
                 ),
                 $("#btn-changelog").on("click", function () {
                   tm($("#popup-changelog")),
                     tf(E),
                     window.open(
                       "https://discord.com/channels/166703751053312000/630428963889741854",
                       "_blank"
                     );
                 }),
                 $("#btn-close-changelog").on("click", function () {
                   tm($("#popup-changelog")), tf(E);
                 }),
                 $("#btn-accept").on("click", function () {
                   g.sendPacket(new v.sendInviteResponse(true)),
                     tm($("#popup-party"));
                 }),
                 $("#btn-decline").on("click", function () {
                   g.sendPacket(new v.sendInviteResponse(false)),
                     tm($("#popup-party"));
                 }),
                 $("#popup-party-code-content button").on("click", function () {
                   $("#popup-party-code-content input").select(),
                     document.execCommand("Copy"),
                     $("#popup-party-code").hide();
                 }),
                 $("#menu-invite").on("click", function () {
                   var e = D.data("selected");
                   g.sendPacket(new v.sendPartyAction(0, e));
                 }),
                 $("#menu-whisper").on("click", function () {
                   var e = D.data("selected"),
                     t = $("#chat-input").val();
                   $("#chat-input").val("/t " + e + " " + t);
                 }),
                 $("#menu-profile").on("click", function () {
                   var e = D.data("selected");
                   g.sendPacket(new v.sendShowProfile(e));
                 }),
                 $("#menu-pu_pr").on("click", function () {
                   void 0 == g.partyCode
                     ? (g.sendPacket(new v.sendPartyAction(4, 0)),
                       $("#menu-pu_pr span").text("Private"))
                     : (g.sendPacket(new v.sendPartyAction(4, 1)),
                       $("#menu-pu_pr span").text("Public"));
                 }),
                 $("#menu-promote").on("click", function () {
                   var e = D.data("party") + 1;
                   e >= 0 && g.sendPacket(new v.sendPartyAction(2, e));
                 }),
                 $("#menu-kick").on("click", function () {
                   var e = D.data("party") + 1;
                   e >= 0 && g.sendPacket(new v.sendPartyAction(1, e));
                 }),
                 $("#menu-spectate").on("click", function () {
                   var e = D.data("selected");
                   e >= 0 && g.sendPacket(new v.sendSpectate(e));
                 }),
                 $("#menu-block").on("click", function () {
                   var e = parseInt(D.data("selected")),
                     t = tj(e);
                   g.selfMsg(t);
                 }),
                 $(document).on("click", function (e) {
                   D.hide(),
                     "chat-emote-btn" !== e.target.id &&
                       $("#emote-panel").hide(),
                     "none" !== $("#popup-party-code").css("display") &&
                       "popup-party-code" !== e.target.id &&
                       $("#popup-party-code").hide();
                 }),
                 $("#aEditChatTabs").on("click", function () {
                   ta(), tm(E), tf($("#popup-chat-tab-editor"));
                 }),
                 $("#cte-tab-selector").on("change", ti),
                 $("#btn-chat-tab-editor-add").on("click", tr),
                 $("#btn-chat-tab-editor-remove").on("click", tc),
                 $("#btn-chat-tab-editor-update").on("click", to),
                 $(".custom-asset-skinner").on("click", function () {
                   $("#popup-asset-skinner .title-text").text($(this).text()),
                     $("#input-asset-skinner")
                       .attr("asset", $(this).attr("id"))
                       .val(""),
                     tm(E),
                     tf($("#popup-asset-skinner"));
                 }),
                 $("#btn-custom-asset-set").on("click", function () {
                   eh.cThemeEnabled || tE();
                   var e = $("#input-asset-skinner").val();
 
                   if (e) {
                     var t = $("#input-asset-skinner").attr("asset");
                     "a" == t.charAt(0) && null != em[t] && tw(t, e);
                   }
 
                   $("#popup-asset-skinner .back-button").trigger("click");
                 }),
                 $("#btn-custom-asset-clear").on("click", function () {
                   eh.cThemeEnabled || tE();
                   var e = $("#input-asset-skinner").attr("asset");
                   "a" == e.charAt(0) && null != em[e] && tw(e, "");
                 }),
                 $("#popup-asset-skinner")
                   .on("dragover", false)
                   .on("drop", function (e) {
                     eh.cThemeEnabled || tE();
                     var t = $("#input-asset-skinner").attr("asset");
 
                     if ("a" == t.charAt(0) && null != em[t]) {
                       var n = nt(e.originalEvent);
 
                       if (/.(jpe?g|png|gif)$/i.test(n.name)) {
                         var s = new FileReader();
                         s.addEventListener(
                           "load",
                           function () {
                             tw(t, this.result);
                           },
                           false
                         ),
                           s.readAsDataURL(n);
                       }
                     }
 
                     return false;
                   }),
                 $("#btn-food-colors").on("click", function () {
                   e2(), tm(E), tf($("#popup-food-colors"));
                 }),
                 $("#btn-theme-export").on("click", function () {
                   eh.cThemeEnabled &&
                     (function (e, t, n) {
                       var s = new Blob([t], {
                         type: n
                       });
                       if (window.navigator.msSaveOrOpenBlob)
                         window.navigator.msSaveOrOpenBlob(s, e);
                       else {
                         var a = document.createElement("a"),
                           i = URL.createObjectURL(s);
                         (a.href = i),
                           (a.download = e),
                           document.body.appendChild(a),
                           a.click(),
                           setTimeout(function () {
                             document.body.removeChild(a),
                               window.URL.revokeObjectURL(i);
                           }, 0);
                       }
                     })("theme.json", JSON.stringify(em, null, 2), "text/plain");
                 }),
                 $("#btn-theme-import").on("click", function () {
                   $("#theme-import").trigger("click");
                 }),
                 $("#theme-import").on("change", function () {
                   var e = $(this).prop("files");
                   e.length > 0 && tU(e[0]);
                 }),
                 $("#main-themes .options-container")
                   .on("dragover", false)
                   .on("drop", function (e) {
                     return tU(nt(e.originalEvent)), false;
                   }),
                 $("#cGlobalLeaderboard").on("change", function () {
                   V &&
                     !q &&
                     ((q = true),
                     firebase
                       .auth()
                       .currentUser.getIdToken()
                       .then((e) => {
                         fetch(ea + "/api/v1/options/setFlags", {
                           method: "POST",
                           headers: {
                             "Content-Type": "application/json"
                           },
                           body: JSON.stringify({
                             token: e
                           })
                         })
                           .then((e) => e.json())
                           .then((e) => {
                             (q = false), $(this).prop("checked", e.message);
                           })
                           .catch((e) => {
                             console.error(e), (q = false), alert(e);
                           });
                       })
                       .catch((e) => {
                         e8(e, true), (q = false);
                       }));
                 }),
                 firebase.auth().onAuthStateChanged(function (e) {
                   if (e) {
                     if (!ny.consented) {
                       firebase
                         .auth()
                         .signOut()
                         .then(function () {});
                       return;
                     }
 
                     $("#guest").hide(),
                       $("#account-loader").show(),
                       g.isConnected() &&
                         null !== firebase.auth().currentUser &&
                         firebase
                           .auth()
                           .currentUser.getIdToken(true)
                           .then((e) => {
                             g.sendPacket(new v.sendAuthToken(e));
                           })
                           .catch((e) => e8(e, true));
                     var t = firebase.database().ref("users/" + e.uid),
                       n = false;
                     t.on("value", function (t) {
                       var s = t.val();
 
                       if (s) {
                         if (
                           (n ||
                             ($("#account-loader").hide(),
                             $("#authed").show(),
                             $("#authed").attr("style", "display: flex;"),
                             $("#cGlobalLeaderboard").removeAttr("disabled"),
                             $("#cGlobalLeaderboard").prop(
                               "checked",
                               s.flags.PUBLIC
                             ),
                             (n = true)),
                           (V = s),
                           $("#account-avatar").attr("src", s.avatar),
                           $("#account-username").text(s.username),
                           e6($("#account-username"), s),
                           $("#account-level").html(
                             "Level " +
                               s.levelData.level +
                               "&nbsp;&nbsp;&nbsp;&nbsp;" +
                               t9(s.levelData.xp_current) +
                               "/" +
                               t9(s.levelData.xp_needed) +
                               " XP"
                           ),
                           $(".xp-meter > span").each(function () {
                             var e =
                               (s.levelData.xp_current / s.levelData.xp_needed) *
                               100;
                             $(this).animate(
                               {
                                 width: e + "%"
                               },
                               1200
                             );
                           }),
                           g.accountListeners.loadServers ||
                             (g.accountListeners.loadServers = firebase
                               .database()
                               .ref("servers/account/" + V.uid)
                               .on("value", function (e) {
                                 var t = e.val();
 
                                 if (t) {
                                   for (var n in ((er = {}), t)) {
                                     var s = t[n];
                                     s.up &&
                                       (er[s.name] = new eX(
                                         s.name,
                                         s.ip + ":" + s.port,
                                         0,
                                         0,
                                         "?",
                                         s.gamemode,
                                         s.region,
                                         s.ssl,
                                         0
                                       ));
                                   }
 
                                   eJ(), null != P && eq(P.name);
                                 }
                               })),
                           s.flags.DISCORD_LINKED &&
                             !g.accountListeners.loadDiscord &&
                             (g.accountListeners.loadDiscord = firebase
                               .firestore()
                               .collection("discord")
                               .doc(V.uid)
                               .onSnapshot((e) => {
                                 e.exists
                                   ? ($("#discordLinkStatus").text(
                                       "Your account is linked with " +
                                         e.data().username +
                                         "#" +
                                         e.data().discrim
                                     ),
                                     $("#discordLinkStatus").show(),
                                     $("#discordLink").hide(),
                                     $("#discordUnlink").show(),
                                     $(".discord-login-container").css(
                                       "padding",
                                       "15px"
                                     ))
                                   : ($("#discordLinkStatus").hide(),
                                     $("#discordUnlink").hide(),
                                     $("#discordLink").show(),
                                     $(".discord-login-container").css(
                                       "padding",
                                       "30px"
                                     ));
                               })),
                           void 0 !== s.tokens)
                         ) {
                           var a = new Date();
                           a.setMonth(a.getMonth() + s.tokens),
                             0 == s.tokens
                               ? ($("#redeem-tokens").hide(),
                                 $("#token-amount").text("You have 0 tokens."))
                               : ($("#redeem-tokens").show(),
                                 $("#token-amount").text(
                                   "You have " +
                                     s.tokens +
                                     " tokens, maximum expiry date: " +
                                     a.toString()
                                 ),
                                 $("#redeem-spend").attr("max", s.tokens));
                         } else $("#token-amount").text("You have 0 tokens.");
 
                         if (
                           V.title &&
                           V.title > 0 &&
                           K &&
                           K.titles &&
                           K.titles.length > 0
                         ) {
                           for (
                             var i = $("#account-titles"), o = 0, r = 0;
                             r < K.titles.length;
                             r++
                           )
                             K.titles[r] == V.title && (o = r + 1);
 
                           o > 0 && i.val(o);
                         }
 
                         g.accountListeners.loadPrivateData ||
                           (g.accountListeners.loadPrivateData = firebase
                             .database()
                             .ref("private/" + e.uid)
                             .on("value", function (e) {
                               var t = e.val();
 
                               if (t) {
                                 if ((K = t).titles && K.titles.length > 0) {
                                   var n = $("#account-titles"),
                                     s = 0;
                                   n.empty(),
                                     n.append(
                                       "<option value='0'>Default Title</option>"
                                     );
 
                                   for (var a = 0; a < t.titles.length; a++)
                                     n.append(
                                       "<option value='" +
                                         (a + 1) +
                                         "'>" +
                                         tW[K.titles[a]] +
                                         "</option>"
                                     ),
                                       K.titles[a] == V.title && (s = a + 1);
 
                                   s > 0 && n.val(s),
                                     n.css("display", "inline-block");
                                 } else
                                   $("#account-titles").css("display", "none");
 
                                 K.message &&
                                   K.message.title &&
                                   K.message.content &&
                                   !K.message.read &&
                                   ($("#popup-message-title").text(
                                     K.message.title
                                   ),
                                   $("#popup-message-content").html(
                                     K.message.content
                                   ),
                                   tf($("#popup-message")),
                                   tm(E));
                               }
                             })),
                           X && e4(V),
                           eK(e.uid);
                       }
                     });
                   } else
                     $("#cGlobalLeaderboard").attr("disabled"),
                       ny.consented
                         ? ($("#authed").hide(),
                           $("#account-loader").hide(),
                           $("#no_cookie_consent").hide(),
                           $("#guest").show())
                         : ($("#authed").hide(),
                           $("#account-loader").hide(),
                           $("#guest").hide(),
                           $("#no_cookie_consent").show());
                 }),
                 $("#account-login").on("click", function () {
                   ny.consented &&
                     firebase
                       .auth()
                       .signInWithPopup(es)
                       .then(function () {})
                       .catch((e) => e8(e, true));
                 }),
                 $("#account-logout").on("click", function () {
                   firebase
                     .auth()
                     .signOut()
                     .then(function () {
                       $("#authed").hide(500),
                         $("#guest").show(),
                         $("#discordLinkStatus").hide(),
                         $(".discord-login-container").show();
                     })
                     .catch((e) => e8(e, true));
                 }),
                 $("#account-shop").on("click", function () {
                   window.open("https://store.gota.io/", "_blank");
                 }),
                 $("#account-social").on("click", function () {
                   V && (e4(V), tf($("#main-social")), tm($(E)));
                 }),
                 $("#social-back-button").on("click", function () {
                   tm($("#main-social")), tf($(E));
                 }),
                 $("#account-profile").on("click", function () {
                   e3(V, E);
                 }),
                 $("#food-colors-close-btn").on("click", function () {
                   tg(E), tm($("#popup-food-colors"));
                 }),
                 $("#account-titles").on("change", function () {
                   if (!q) {
                     var e = parseInt($(this).val());
                     (q = true),
                       firebase
                         .auth()
                         .currentUser.getIdToken()
                         .then((t) => {
                           fetch(ea + "/api/v1/options/setTitle", {
                             method: "POST",
                             headers: {
                               "Content-Type": "application/json"
                             },
                             body: JSON.stringify({
                               token: t,
                               title: e
                             })
                           })
                             .then((e) => e.json())
                             .then(() => {
                               q = false;
                             })
                             .catch((e) => {
                               console.error(e), (q = false);
                             });
                         })
                         .catch((e) => {
                           e8(e, true), (q = false);
                         });
                   }
                 }),
                 $("#popup-message-read-btn").on("click", function () {
                   q ||
                     (tm($("#popup-message")),
                     tg(E),
                     (q = true),
                     firebase
                       .auth()
                       .currentUser.getIdToken()
                       .then((e) => {
                         fetch(ea + "/api/v1/options/markAsRead", {
                           method: "POST",
                           headers: {
                             "Content-Type": "application/json"
                           },
                           body: JSON.stringify({
                             token: e
                           })
                         })
                           .then((e) => e.json())
                           .then(() => {
                             q = false;
                           })
                           .catch((e) => {
                             console.error(e), (q = false);
                           });
                       })
                       .catch((e) => {
                         e8(e, true), (q = false);
                       }));
                 }),
                 $("#account-set-username-btn").on("click", function () {
                   if (V) {
                     t(false, this);
                     var e = $("#account-username-input").val();
 
                     if (!e || "" == e || "" == e.trim()) {
                       alert("Please provide a username!"), t(true, this);
                       return;
                     }
 
                     firebase
                       .auth()
                       .currentUser.getIdToken()
                       .then((n) => {
                         fetch(ea + "/api/v1/social/username", {
                           method: "POST",
                           headers: {
                             "Content-Type": "application/json"
                           },
                           body: JSON.stringify({
                             token: n,
                             username: e
                           })
                         })
                           .then((e) => e.json())
                           .then((e) => {
                             if ((t(true, this), 200 == e.code)) {
                               tg(E), $("#popup-account-username").hide();
                               return;
                             }
 
                             alert(e.message);
                           })
                           .catch((e) => {
                             console.error(e), alert(e), t(true, this);
                           });
                       })
                       .catch((e) => {
                         t(true, this), e8(e, true);
                       });
                   }
                 }),
                 $(".popup-panel .back-button").on("click", function () {
                   $(".popup-panel").each(function () {
                     tm($(this));
                   }),
                     tg(E);
                 }),
                 $("#discordLink").on("click", function () {
                   V &&
                     firebase
                       .auth()
                       .currentUser.getIdToken()
                       .then((e) => {
                         window.open(
                           "https://accounts.gota.io/api/v1/options/discord/redirect?token=" +
                             e,
                           "popup",
                           "width=600,height=700"
                         );
                       });
                 }),
                 $("#discordUnlink").on("click", function () {
                   V &&
                     firebase
                       .auth()
                       .currentUser.getIdToken()
                       .then((e) => {
                         fetch(ea + "/api/v1/options/discord/unlink", {
                           method: "POST",
                           body: JSON.stringify({
                             token: e
                           }),
                           headers: {
                             "Content-Type": "application/json"
                           }
                         })
                           .then((e) => e.json())
                           .then((e) => {
                             alert(e.message);
                           });
                       })
                       .catch((e) => e8(e));
                 }),
                 $("#redeem-tokens").submit(function (e) {
                   if (
                     (e.preventDefault(),
                     V &&
                       confirm(`By redeeming, you are agreeing the locked name rules linked below the form.
 
 ABUSE WILL RESULT IN THE DELETION OF YOUR LOCKED NAME WITH NO REFUND AND THE POSSIBILITY OF ACCOUNT SUSPENSION.
 
 Press OK to redeem.`))
                   ) {
                     var t = $("#redeem-name").val(),
                       n = $("#redeem-spend").val();
                     firebase
                       .auth()
                       .currentUser.getIdToken()
                       .then((e) => {
                         fetch(ea + "/api/v1/options/redeem", {
                           method: "POST",
                           body: JSON.stringify({
                             token: e,
                             name: t,
                             spend: parseInt(n)
                           }),
                           headers: {
                             "Content-Type": "application/json"
                           }
                         })
                           .then((e) => e.json())
                           .then((e) => {
                             alert(e.message), 200 === e.code && eK(V.uid);
                           });
                       })
                       .catch((e) => e8(e));
                   }
                 }),
                 $(".error-banner").on("click", function () {
                   $(this).hide();
                 }),
                 $("#btn-add-friend").on("click", function (e) {
                   if ((e.preventDefault(), V)) {
                     var t = prompt(
                       "Enter friend's UID (found above add friend button)"
                     );
 
                     if (t) {
                       var n = t.replace(/s/g, "");
                       if ("string" != typeof t || 0 === n.length)
                         return alert("Please enter a valid UID");
                       firebase
                         .auth()
                         .currentUser.getIdToken()
                         .then((e) => {
                           fetch(ea + "/api/v1/social/friends", {
                             method: "POST",
                             headers: {
                               "Content-Type": "application/json"
                             },
                             body: JSON.stringify({
                               token: e,
                               target: n,
                               action: 1
                             })
                           })
                             .then((e) => e.json())
                             .then((e) => {
                               alert(e.message);
                             });
                         })
                         .catch((e) => e8(e, true));
                     }
                   }
                 }),
                 (document.getElementById("party-canvas").oncontextmenu = td),
                 $(document).keyup(function (e) {
                   if (13 == e.keyCode) {
                     var t = $("#chat-input");
 
                     if ("INPUT" != document.activeElement.tagName) {
                       var n = t[0];
                       n && n.setSelectionRange(n.value.length, n.value.length),
                         t.focus();
                     } else t.is(":focus") && t.blur();
                   }
                 }),
                 $(window).bind("beforeunload", function () {
                   return "Are you sure you want to leave Gota.io?";
                 }),
                 e5(),
                 $(".keybinds-btn").on("click", function () {
                   $(".keybinds-btn").removeClass("keybinds-btn-selected"),
                     $(this).addClass("keybinds-btn-selected"),
                     (eu = true);
                 }),
                 $("#btn-reset-keybinds").on("click", function () {
                   $(".keybinds-btn").each(function () {
                     var e = $(this),
                       t = e.attr("id");
                     null != ef[t] && ((ep[t] = ef[t]), eG(e));
                   });
                 }),
                 $("#scrimmage-mode-select").on("change", function () {
                   $("#scrimmage-mode-info").children().css("display", "none"),
                     $("#scrimmage-info-" + $(this).val()).css(
                       "display",
                       "block"
                     );
                 }),
                 $("#btn-queue").on("click", function () {
                   var e = parseInt($("#scrimmage-mode-select").val()),
                     t = isNaN(e) ? 0 : Math.min(Math.max(e, 0), 100);
                   g.sendPacket(new v.sendQueue(t)), $(this).blur();
                 }),
                 $("#btn-leave-match").on("click", function () {
                   g.sendPacket(new v.sendLeaveMatch());
                 }),
                 $("#btn-custom-create").on("click", function () {
                   g.sendPacket(new v.sendCustomGame(0)), $(this).blur();
                 }),
                 $("#btn-custom-return").on("click", function () {
                   g.sendPacket(new v.sendCustomGame(1));
                 }),
                 $("#btn-custom-start").on("click", function () {
                   g.sendPacket(new v.sendCustomGame(2));
                 }),
                 $("#btn-custom-lobbies").on("click", function () {
                   g.sendPacket(new v.sendShowLobbies());
                 }),
                 $("#btn-lobbies-refresh").on("click", function () {
                   g.sendPacket(new v.sendShowLobbies());
                 }),
                 $("#btn-lobbies-join").on("click", function () {
                   if (0 !== U) {
                     var e = U,
                       t = "",
                       n = R[e];
                     null != n &&
                       (n.hasPasscode &&
                         (t = prompt(
                           "Enter the password to join this game",
                           ""
                         )),
                       null == t && (t = ""),
                       g.sendPacket(new v.sendJoinLobby(e, t)));
                   }
                 }),
                 $("#btn-lobbies-return").on("click", function () {
                   $(".scrimmage-full").css("display", "none"),
                     $("#scrimmage-menu").css("display", "block");
                 }),
                 $("#scrimmage-map").on("change", function () {
                   var e = $(this).find("option:selected").val(),
                     t = $(this).attr("data");
                   e != t &&
                     ($("#scrimmage-map option[value='" + t + "']").prop(
                       "selected",
                       true
                     ),
                     g.sendPacket(new v.sendCustomGameUpdate(nr.MAP, e)));
                 }),
                 $("#scrimmage-mapmode").on("change", function () {
                   var e = $(this).find("option:selected").val(),
                     t = $(this).attr("data");
                   e != t &&
                     ($("#scrimmage-mapmode option[value='" + t + "']").prop(
                       "selected",
                       true
                     ),
                     g.sendPacket(new v.sendCustomGameUpdate(nr.MODE, e)));
                 }),
                 $("#scrimmage-mapsize").on("change", function () {
                   var e = $(this).find("option:selected").val(),
                     t = $(this).attr("data");
                   e != t &&
                     ($("#scrimmage-mapsize option[value='" + t + "']").prop(
                       "selected",
                       true
                     ),
                     g.sendPacket(new v.sendCustomGameUpdate(nr.SIZE, e)));
                 }),
                 $("#scrimmage-startmass").on("change", function () {
                   var e = $(this).val(),
                     t = $(this).attr("data");
 
                   if (isNaN(e)) {
                     $(this).val(t);
                     return;
                   }
 
                   (e = Math.max(1, Math.min(parseInt(e), 32e3))) != t &&
                     ($(this).val(t),
                     g.sendPacket(new v.sendCustomGameUpdate(nr.STARTMASS, e)));
                 }),
                 $("#scrimmage-virusDensity").on("change", function () {
                   var e = $(this).val(),
                     t = $(this).attr("data");
 
                   if (isNaN(e)) {
                     $(this).val(t);
                     return;
                   }
 
                   (e = Math.max(0, Math.min(parseInt(e), 1e3))) != t &&
                     ($(this).val(t),
                     g.sendPacket(
                       new v.sendCustomGameUpdate(nr.VIRUS_DENSITY, e)
                     ));
                 }),
                 $("#scrimmage-respawnDelay").on("change", function () {
                   var e = $(this).val(),
                     t = $(this).attr("data");
 
                   if (isNaN(e)) {
                     $(this).val(t);
                     return;
                   }
 
                   (e = Math.max(-1, Math.min(parseInt(e), 600))) != t &&
                     ($(this).val(t),
                     g.sendPacket(
                       new v.sendCustomGameUpdate(nr.RESPAWN_DELAY, e)
                     ));
                 }),
                 $("#scrimmage-lockteams").on("change", function () {
                   var e = $(this).prop("checked");
                   $(this).prop("checked", !e),
                     g.sendPacket(
                       new v.sendCustomGameUpdate(nr.LOCK, true == e ? 1 : 0)
                     );
                 }),
                 $("#scrimmage-autoSplit").on("change", function () {
                   var e = $(this).prop("checked");
                   $(this).prop("checked", !e),
                     g.sendPacket(
                       new v.sendCustomGameUpdate(nr.AUTOSPLIT, true == e ? 1 : 0)
                     );
                 }),
                 $("#scrimmage-public").on("change", function () {
                   var e = $(this).prop("checked");
                   $(this).prop("checked", !e),
                     g.sendPacket(
                       new v.sendCustomGameUpdate(nr.PUBLIC, true == e ? 1 : 0)
                     );
                 }),
                 $("#scrimmage-password").on("change", function () {
                   var e = $(this).prop("checked");
                   $(this).prop("checked", !e);
                   var t = "";
                   e &&
                     (t = prompt(
                       "Enter a password to join your game (32 max characters)",
                       ""
                     )),
                     null == t && (t = ""),
                     g.sendPacket(
                       new v.sendCustomGameUpdateString(nr.PASSWORD, t)
                     );
                 }),
                 $("#scrimmage-name").on("click", function () {
                   if (g.isPartyLeader()) {
                     var e = prompt(
                       "Enter a new name for your game (32 max characters)",
                       $(this).text()
                     );
                     null != e &&
                       g.sendPacket(
                         new v.sendCustomGameUpdateString(nr.NAME, e)
                       );
                   }
                 });
             })(),
             $(window).unload(eE),
             (g = new ex()),
             (v = new eL()),
             eS(function (e) {
               $("#" + e).spectrum({
                 color: em[e],
                 preferredFormat: "hex",
                 showInput: true,
                 showAlpha: true,
                 clickoutFiresChange: false,
                 change: function (t) {
                   (em[e] = t.toRgbString()), t_(e, em[e]);
                 }
               });
             }),
             $("#uiGameBackgroundColor").spectrum("option", "showAlpha", false),
             $("#uiGameBorderColor").spectrum("option", "showAlpha", false),
             $("#pFoodColors").spectrum({
               preferredFormat: "hex",
               showInput: true,
               chooseText: "Add",
               flat: true,
               clickoutFiresChange: false,
               change: function (e) {
                 eh.cThemeEnabled || tE();
                 var t = e.toHexString();
                 em._FoodColors.includes(t) || (em._FoodColors.push(t), e2());
               }
             }),
             ny.init(),
             tn();
           var r = {
             view: u,
             transparent: true,
             forceCanvas: "CANVAS" === eh.sRenderType,
             antialias: !eh.cDisableAA
           };
           (h = {
             renderer: t.autoDetectRenderer(r),
             stage: n
           }),
             $(window).resize(ew),
             ew(),
             (y = Date.now()),
             (fps = 0),
             g.selfMsg("Welcome to Gota.io!"),
             ei.enabled && "" !== ei.motd && g.selfMsg(ei.motd),
             ei.enabled &&
               ei.particles &&
               !eh.cDisableEventSkins &&
               (N = new tT(ei.particlesMax)),
             (function () {
               if (ny.consented) {
                 var e = localStorage.getItem("version"),
                   t = version.split(".");
 
                 if (null === e) {
                   localStorage.setItem("version", version);
                   return;
                 }
 
                 (e = e.split(".")),
                   (t[0] != e[0] || t[1] != e[1]) &&
                     (localStorage.setItem("version", version),
                     tm(E),
                     tf($("#popup-changelog")));
               }
             })(),
             requestAnimationFrame(eP);
         })();
     });
 })();

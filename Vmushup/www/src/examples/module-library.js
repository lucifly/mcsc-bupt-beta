// Module is used for Iframework.Library and has info about ins and outs
// Node is used by Graph, and has info about x, y, w, h

$(function(){

  var library = {
    LocalServices: [
	  {"src":"http://10.108.92.2:3000/webmeemoo/www/src/parting/Weather.html","info":{"title":"Weather","author":"NIU","description":"license_recognition","iconUrl":"img/gate.png"}},
      {"src":"http://10.108.92.2:3000/webmeemoo/www/src/parting/Clothesline.html","info":{"title":"Clothesline","author":"NIU","description":"license_recognition","iconUrl":"img/pay.png"}},
      {"src":"http://10.108.92.2:3000/webmeemoo/www/src/parting/camera.html","info":{"title":"camera","author":"NIU","description":"personsecrity","iconUrl":"img/lies.png"}},	  
	  {"src":"http://10.108.92.2:3000/webmeemoo/www/src/parting/Weather.html","info":{"title":"Weather","author":"NIU","description":"license_recognition","iconUrl":"img/gate.png"}},
      {"src":"http://10.108.92.2:3000/webmeemoo/www/src/parting/Clothesline.html","info":{"title":"Clothesline","author":"NIU","description":"license_recognition","iconUrl":"img/pay.png"}},
      {"src":"http://10.108.92.2:3000/webmeemoo/www/src/parting/camera.html","info":{"title":"camera","author":"NIU","description":"personsecrity","iconUrl":"img/lies.png"}},	  
	  {"src":"http://10.108.92.2:3000/webmeemoo/www/src/parting/Weather.html","info":{"title":"Weather","author":"NIU","description":"license_recognition","iconUrl":"img/gate.png"}},
      {"src":"http://10.108.92.2:3000/webmeemoo/www/src/parting/Clothesline.html","info":{"title":"Clothesline","author":"NIU","description":"license_recognition","iconUrl":"img/pay.png"}},
	  {"src":"http://10.108.92.2:3000/webmeemoo/www/src/parting/Weather.html","info":{"title":"Weather","author":"NIU","description":"license_recognition","iconUrl":"img/gate.png"}},
      {"src":"http://10.108.92.2:3000/webmeemoo/www/src/parting/Clothesline.html","info":{"title":"Clothesline","author":"NIU","description":"license_recognition","iconUrl":"img/pay.png"}},
      {"src":"http://10.108.92.2:3000/webmeemoo/www/src/parting/camera.html","info":{"title":"camera","author":"NIU","description":"personsecrity","iconUrl":"img/lies.png"}},
	  {"src":"http://10.108.92.2:3000/webmeemoo/www/src/parting/Weather.html","info":{"title":"Weather","author":"NIU","description":"license_recognition","iconUrl":"img/gate.png"}},
      {"src":"http://10.108.92.2:3000/webmeemoo/www/src/parting/Clothesline.html","info":{"title":"Clothesline","author":"NIU","description":"license_recognition","iconUrl":"img/pay.png"}},
      {"src":"http://10.108.92.2:3000/webmeemoo/www/src/parting/camera.html","info":{"title":"camera","author":"NIU","description":"personsecrity","iconUrl":"img/lies.png"}},	  
	  {"src":"http://10.108.92.2:3000/webmeemoo/www/src/parting/Weather.html","info":{"title":"Weather","author":"NIU","description":"license_recognition","iconUrl":"img/gate.png"}},
      {"src":"http://10.108.92.2:3000/webmeemoo/www/src/parting/Clothesline.html","info":{"title":"Clothesline","author":"NIU","description":"license_recognition","iconUrl":"img/pay.png"}},
      {"src":"http://10.108.92.2:3000/webmeemoo/www/src/parting/camera.html","info":{"title":"camera","author":"NIU","description":"personsecrity","iconUrl":"img/lies.png"}},
      {"src":"http://10.108.92.2:3000/webmeemoo/www/src/parting/camera.html","info":{"title":"camera","author":"NIU","description":"personsecrity","iconUrl":"img/lies.png"}},
      {"src":"http://10.108.92.2:3000/webmeemoo/www/src/parting/Message.html","info":{"title":"Message","author":"NIU","description":"searchparam","iconUrl":"img/searchdata.png"}}
    ],
    WebServices: [
      {"src":"http://10.108.92.2:3000/webmeemoo/www/src/parting/Weather.html","info":{"title":"voicerecognition","author":"NIU","description":"license_recognition","iconUrl":"img/voicerecognition.png"}},
      {"src":"http://10.108.92.2:3000/webmeemoo/www/src/parting/Clothesline.html","info":{"title":"videotranscode","author":"NIU","description":"license_recognition","iconUrl":"img/videotranscode.png"}},
	  {"src":"http://10.108.92.2:3000/webmeemoo/www/src/parting/Weather.html","info":{"title":"Weather","author":"NIU","description":"license_recognition","iconUrl":"img/weather.png"}},
      {"src":"http://10.108.92.2:3000/webmeemoo/www/src/parting/camera.html","info":{"title":"statement","author":"NIU","description":"personsecrity","iconUrl":"img/statement.png"}},
      {"src":"http://10.108.92.2:3000/webmeemoo/www/src/parting/camera.html","info":{"title":"pay","author":"NIU","description":"personsecrity","iconUrl":"img/pay.png"}},
      {"src":"http://10.108.92.2:3000/webmeemoo/www/src/parting/Message.html","info":{"title":"priceratio","author":"NIU","description":"searchparam","iconUrl":"img/priceratio.png"}}
    ],
    IoTServices: [
	  {"src":"http://10.108.92.2:3000/webmeemoo/www/src/parting/Weather.html","info":{"title":"door","author":"NIU","description":"license_recognition","iconUrl":"img/door.png"}},
      {"src":"http://10.108.92.2:3000/webmeemoo/www/src/parting/Clothesline.html","info":{"title":"clotheshanger","author":"NIU","description":"license_recognition","iconUrl":"img/clotheshanger.png"}},
	  {"src":"http://10.108.92.2:3000/webmeemoo/www/src/parting/Weather.html","info":{"title":"light","author":"NIU","description":"license_recognition","iconUrl":"img/light.png"}},
      {"src":"http://10.108.92.2:3000/webmeemoo/www/src/parting/camera.html","info":{"title":"camara","author":"NIU","description":"personsecrity","iconUrl":"img/camara.png"}},
      {"src":"http://10.108.92.2:3000/webmeemoo/www/src/parting/camera.html","info":{"title":"electronrall","author":"NIU","description":"personsecrity","iconUrl":"img/electronrall.png"}},
      {"src":"http://10.108.92.2:3000/webmeemoo/www/src/parting/camera.html","info":{"title":"refrigarator","author":"NIU","description":"personsecrity","iconUrl":"img/refrigarator.png"}},
      {"src":"http://10.108.92.2:3000/webmeemoo/www/src/parting/camera.html","info":{"title":"television","author":"NIU","description":"personsecrity","iconUrl":"img/television.png"}},
      {"src":"http://10.108.92.2:3000/webmeemoo/www/src/parting/Message.html","info":{"title":"aircondition","author":"NIU","description":"searchparam","iconUrl":"img/aircondition.png"}}
    ],
    TelecomnubicationServices: [
      {"src":"http://10.108.92.2:3000/webmeemoo/www/src/parting/toshow.html","info":{"title":"toshow","author":"NIU","description":"text to speech with speak.js","iconUrl":"img/address2location.png"}},
      {"src":"http://10.108.92.2:3000/webmeemoo/www/src/parting/Weather.html","info":{"title":"voice","author":"NIU","description":"license_recognition","iconUrl":"img/voice.png"}},
      {"src":"http://10.108.92.2:3000/webmeemoo/www/src/parting/Clothesline.html","info":{"title":"fax","author":"NIU","description":"license_recognition","iconUrl":"img/fax.png"}},
      {"src":"http://10.108.92.2:3000/webmeemoo/www/src/parting/camera.html","info":{"title":"ivr","author":"NIU","description":"personsecrity","iconUrl":"img/ivr.png"}},	  	  
      {"src":"http://10.108.92.2:3000/webmeemoo/www/src/parting/Message.html","info":{"title":"Message","author":"NIU","description":"searchparam","iconUrl":"img/message.png"}}
    ],
    图像: [
      {"src":"meemoo:image/cam","info":{"title":"cam","author":"meemoo","description":"HTML5 webcam with getUserMedia."}},
      {"src":"meemoo:image/paint","info":{"title":"paint","author":"meemoo","description":"paint on, trace, or cut out an image"}},
      {"src":"meemoo:image/transform","info":{"title":"transform","author":"meemoo","description":"scale, translate, and/or rotate image (centered)"}},
      {"src":"meemoo:image/fit","info":{"title":"fit","author":"meemoo","description":"scale and crop an image to fit the given size. easy way to make thumbnails."}},
      {"src":"meemoo:image/crop","info":{"title":"crop","author":"meemoo","description":"crop an image to a rectangle"}},
      {"src":"meemoo:image/rectangle","info":{"title":"rectangle","author":"meemoo","description":"draw a rectangle"}},
      {"src":"meemoo:image/circle","info":{"title":"circle","author":"meemoo","description":"draw a circle"}},
      {"src":"meemoo:image/triangle","info":{"title":"triangle","author":"meemoo","description":"draw a triangle"}},
      {"src":"meemoo:image/text","info":{"title":"text","author":"meemoo","description":"draw text to a canvas"}},
      {"src":"meemoo:video/player","info":{"title":"video","author":"meemoo","description":"HTML5 video player"}},
      {"src":"meemoo:image/in","info":{"title":"image","author":"forresto","description":"hold a canvas or get image from url or service"}},
      {"src":"meemoo:image/layers","info":{"title":"layers","author":"meemoo","description":"make a stack of images"}},
      // {"src":"meemoo:image/mapper","info":{"title":"mapper","author":"meemoo","description":"projection mapping corner pin image warp"}},
      // {"src":"file:///src/parting/testing.html","info":{"title":"TESTING-FILE1","author":"NIU","description":"text to speech with speak.js","iconUrl":"img/address2location.png"}},
      // {"src":"file:///parting/testing.html","info":{"title":"TESTING-FILE2","author":"NIU","description":"text to speech with speak.js","iconUrl":"img/address2location.png"}},
      // {"src":"file:///testing.html","info":{"title":"TESTING-FILE3","author":"NIU","description":"text to speech with speak.js","iconUrl":"img/address2location.png"}},
      // {"src":"http://10.108.92.2:3000/www/src/parting/testing2.html","info":{"title":"TESTING-HTTP","author":"NIU","description":"text to speech with speak.js","iconUrl":"img/address2location.png"}},
      {"src":"http://10.108.92.2:3000/www/src/parting/toshow.html","info":{"title":"toshow","author":"NIU","description":"text to speech with speak.js","iconUrl":"img/address2location.png"}},
      {"src":"http://10.108.92.2:3000/www/src/parting/license_recognition.html","info":{"title":"license_recognition","author":"NIU","description":"license_recognition","iconUrl":"img/lisen.png"}},
      {"src":"http://10.108.92.2:3000/www/src/parting/Time_query.html","info":{"title":"Time_query","author":"NIU","description":"license_recognition","iconUrl":"img/time_qury.png"}},
      {"src":"http://10.108.92.2:3000/www/src/parting/Tariff.html","info":{"title":"Tariff","author":"NIU","description":"license_recognition","iconUrl":"img/traff.png"}},
      {"src":"http://10.108.92.2:3000/www/src/parting/billing.html","info":{"title":"billing","author":"NIU","description":"license_recognition","iconUrl":"img/bill.png"}},
      {"src":"http://10.108.92.2:3000/www/src/parting/gate.html","info":{"title":"gate","author":"NIU","description":"license_recognition","iconUrl":"img/gate.png"}},
      {"src":"http://10.108.92.2:3000/www/src/parting/pay.html","info":{"title":"pay","author":"NIU","description":"license_recognition","iconUrl":"img/pay.png"}},
      {"src":"meemoo:variable/animation","info":{"title":"animation","author":"meemoo","description":"holds a stack of canvases to use as an animation"}}
    ],
    效果: [
      {"src":"meemoo:image/chromakey","info":{"title":"chromakey","author":"forresto, timtaubert","description":"greenscreen chromakey"}},
      {"src":"meemoo:image/lumakey","info":{"title":"lumakey","author":"forresto","description":"remove white or black, lumakey"}},
      {"src":"meemoo:image/grid","info":{"title":"grid","author":"forresto","description":"images stack up in a grid"}},
      {"src":"meemoo:image/interlace","info":{"title":"interlace","author":"forresto","description":"interlace images together"}},
      {"src":"meemoo:image/slitscan","info":{"title":"slitscan","author":"forresto","description":"slitscan effect"}},
      {"src":"meemoo:image/tile","info":{"title":"tile","author":"forresto","description":"tile to fill canvas, reflect mirror tile for seamless"}},
      {"src":"meemoo:image/particles","info":{"title":"particles","author":"forresto","description":"make a stream of particles from an image or spritesheet"}},
      {"src":"meemoo:image/trails","info":{"title":"trails","author":"forresto","description":"draws image without clearing, leaving motion trails"}},
      {"src":"meemoo:image/monochrome","info":{"title":"monochrome","author":"ticky+flickr+forresto","description":"monochrome by atkinson, bayer, floydsteinberg, or no dither"}},
      {"src":"meemoo:image/ascii","info":{"title":"ascii","author":"forresto","description":"ascii text or emoji art"}}
    ],
    工具: [
      {"src":"meemoo:util/stats","info":{"title":"stats.js","author":"mr.doob","description":"fps stats graph"}},
      {"src":"meemoo:image/palette","info":{"title":"palette","author":"nrabinowitz","description":"get color palette from image color quantize"}},
      {"src":"meemoo:util/color-hsla","info":{"title":"color-hsla","author":"meemoo","description":"make hsla() css color (hue, saturation, lightness, alpha)"}},
      {"src":"meemoo:util/math","info":{"title":"math","author":"silentmatt","description":"math equation evaluator"}},
      {"src":"meemoo:util/logic","info":{"title":"logic","author":"meemoo","description":"greater than (>) less than (<) equal (==) not equal (!=) logic"}},
      {"src":"meemoo:file/webm","info":{"title":"webm","author":"antimatter15","description":"(Chrome only) Canvas to WebM video encoder thanks to antimatter15/whammy."}},
      {"src":"meemoo:string/markov","info":{"title":"markov","author":"BrianHicks","description":"makes a markov chain based on seed text. useful for gibberish, a kind of cutup method."}}
    ],
    子图: [
      {"src":"meemoo:subgraph/subgraph","info":{"title":"subgraph","author":"meemoo","description":"encapsulate some nodes into a nested macro subgraph"}},
      {"src":"meemoo:subgraph/input","info":{"title":"input","author":"meemoo","description":"publish input for when this graph is a subgraph"}},
      {"src":"meemoo:subgraph/output","info":{"title":"output","author":"meemoo","description":"publish output for when this graph is a subgraph"}}
    ],
    流程: [
      {"src":"meemoo:util/gate","info":{"title":"gate","author":"meemoo","description":"stop the data flow and let one through"}},
      {"src":"meemoo:time/throttle","info":{"title":"throttle","author":"meemoo","description":"too many fps? use throttle to limit data rate passing through flow."}},
      {"src":"meemoo:time/delay","info":{"title":"delay","author":"meemoo","description":"holds x values until the next one comes"}},
      {"src":"meemoo:util/count","info":{"title":"count","author":"meemoo","description":"count the times that the data input is hit"}}
    ],
    时间: [
      {"src":"meemoo:time/tween","info":{"title":"tween","author":"sole","description":"Interpolate between two values."}},
      {"src":"meemoo:time/countdown","info":{"title":"countdown","author":"forresto","description":"Countdown to a bang."}},
      {"src":"meemoo:time/metronome","info":{"title":"metronome","author":"forresto","description":"Metronome beats per minute"}}
    ],
    交互: [
      {"src":"meemoo:ui/button","info":{"title":"button","author":"meemoo","description":"a button sends a bang, and you can attach a keyboard key"}},
      {"src":"meemoo:ui/hslider","info":{"title":"hslider","author":"meemoo","description":"horizontal slider"}},
      {"src":"meemoo:ui/vslider","info":{"title":"vslider","author":"meemoo","description":"vertical slider"}},
      {"src":"meemoo:ui/number","info":{"title":"number","author":"meemoo","description":"simple number box"}},
      {"src":"meemoo:ui/text","info":{"title":"text","author":"meemoo","description":"a text box to save and send text"}},
      {"src":"meemoo:ui/textarea","info":{"title":"textarea","author":"meemoo","description":"a multiline text box to edit and send text"}},
      {"src":"meemoo:ui/checkbox","info":{"title":"checkbox","author":"meemoo","description":"a checkbox to send boolean on/off"}},
      {"src":"meemoo:ui/xy","info":{"title":"xy pad","author":"meemoo","description":"sends coordinates as percentage"}},
      {"src":"meemoo:ui/mouse","info":{"title":"mouse","author":"meemoo","description":"sends mouse coordinates as percentage"}},
      {"src":"meemoo:ui/motion","info":{"title":"motion","author":"meemoo","description":"sends device motion (accelerometer) data as percentage (Chrome and iOS only)"}},
      {"src":"meemoo:ui/leap","info":{"title":"leap","author":"meemoo","description":"leap motion hand tracker"}},
      {"src":"meemoo:ui/facetracker","info":{"title":"facetracker","author":"meemoo","description":"checks image for face, sends coordinates"}},
      {"src":"meemoo:ui/makeymakey","info":{"title":"makeymakey","author":"meemoo","description":"makeymakey board"}},
      {"src":"meemoo:ui/smartphone","info":{"title":"smartphone","author":"meemoo","description":"iOS or Android smartphone gamepad controller via muzzley.com"}}
    ],
    "iFrame组件": [
      // {"src":"http://forresto.github.com/meemoo-camcanvas/onionskin.html","info":{"title":"cam+onionskin","author":"taboca + forresto + ginger","description":"flash webcam image to canvas with onionskin of last frame"}},
      // {"src":"http://forresto.github.com/meemoo-camcanvas/webcam2canvas.html","info":{"title":"cam","author":"taboca + Forrest Oliphant","description":"flash webcam image to canvas"}},
      // {"src":"http://forresto.github.com/meemoo-image/transform.html","info":{"title":"transform","author":"forresto","description":"scale, translate, and/or rotate image (centered)"}},
      // {"src":"http://forresto.github.com/meemoo-image/combine.html","info":{"title":"combine","author":"forresto","description":"combine image layers"}},
      // {"src":"http://forresto.github.com/meemoo-image/crop.html","info":{"title":"crop","author":"meemoo","description":"crop image"}},
      // {"src":"http://forresto.github.com/meemoo-blend/blend.html","info":{"title":"blend","author":"forresto","description":"blend imageData under and over with given mode"}},
      // {"src":"http://forresto.github.com/meemoo-image/mask.html","info":{"title":"alpha mask","author":"forresto","description":"use a grayscale image as the alpha for another image"}},
      // {"src":"http://forresto.github.com/meemoo-image/threshold.html","info":{"title":"threshold","author":"forresto","description":"image to monochrome via luminosity threshold"}},
      // {"src":"http://forresto.github.com/meemoo-image/alpha.html","info":{"title":"alpha","author":"forresto","description":"use a greyscale image as the alpha for a color image"}},
      {"src":"http://forresto.github.com/meemoo-image/aviary.html","info":{"title":"aviary","author":"aviary","description":"aviary.com image editor with enhance, brightness, contrast, crop, paint, stickers, text...","iconUrl":"img/aviary.png"}},
      {"src":"http://forresto.github.com/meemoo-paint/paint.html","info":{"title":"paint","author":"forresto","description":"canvas pixel paint","iconUrl":"img/paint.png"}},
      {"src":"http://automata.github.com/meemoo-harmony/","info":{"title":"harmony","author":"ze frank + mr.doob + automata","description":"sketchy procedural drawing tool","iconUrl":"img/harmony.png"}},
      // {"src":"http://forresto.github.com/meemoo-image/text.html","info":{"title":"text","author":"forresto","description":"text to image"}},
      // {"src":"http://forresto.github.com/meemoo-image/rectangle.html","info":{"title":"rectangle","author":"forresto","description":"draw a rectangle"}},
      // {"src":"http://forresto.github.com/meemoo-image/circle.html","info":{"title":"circle","author":"forresto","description":"draw a circle or an arc"}},
      {"src":"http://forresto.github.com/meemoo-modules/processing.html","info":{"title":"processing.js","description":"processing code loader","iconUrl":"img/processing.js.png"}},
      // {"src":"http://forresto.github.com/meemoo-modules/canvasarray.html","info":{"title":"canvas array","author":"forresto","description":"hold a stack of canvases for reuse, click sends it, arrows navigate to prev/next"}},
      // {"src":"http://forresto.github.com/meemoo-image/spritesheet.html","info":{"title":"spritesheet","author":"forresto","description":"makes a single-image filmstrip sprite sheet"}},
      // {"src":"http://forresto.github.com/meemoo-image/spritesplit.html","info":{"title":"spritesplit","author":"forresto","description":"separates images from filmstrip sprite sheet"}}
      // {"src":"http://forresto.github.com/meemoo-math/math.html","info":{"title":"math","author":"silentmatt + forresto","description":"math equation evaluator"}},
      // {"src":"http://forresto.github.com/meemoo-modules/color-hsla.html","info":{"title":"color-hsla","author":"forresto","description":"make hsla() css color (hue, saturation, lightness, alpha)"}},
      // {"src":"http://forresto.github.com/meemoo-modules/color-rgba.html","info":{"title":"color-rgba","author":"forresto","description":"make rgba() css color (red, green, blue, alpha)"}},
      {"src":"http://forresto.github.com/meemoo-modules/string-join.html","info":{"title":"string-join","author":"forresto","description":"join text strings into one string","iconUrl":"img/string-join.png"}},
      {"src":"http://forresto.github.com/meemoo-modules/log.html","info":{"title":"log","author":"meemoo","description":"log all messages","iconUrl":"img/log.png"}},
      // {"src":"http://meemoo-image-in.phpfogapp.com/image-in.html","info":{"title":"image-in","author":"forresto","description":"Public image url to get the canvas pixel data."}},
      // {"src":"http://forresto.github.com/meemoo-modules/file-reader-image.html","info":{"title":"image file","author":"forresto","description":"Select or drag local images to get the canvas pixel data. Requires a browser with the FileReader API, like Firefox or Chrome."}},
      {"src":"http://forresto.github.com/meemoo-modules/canvas2img.html","info":{"title":"canvas2img","author":"forresto","description":"canvas image data to image data url","iconUrl":"img/canvas2img.png"}},
      {"src":"http://forresto.github.com/meemoo-modules/imgur.html","info":{"title":"imgur","author":"forresto","description":"image data url to Imgur image sharing service","iconUrl":"img/imgur.png"}},
      // {"src":"http://forresto.github.com/meemoo-modules/img2canvas.html","info":{"title":"img2canvas","author":"forresto","description":"image data url to canvas image data"}},
      {"src":"http://forresto.github.com/meemoo-modules/delay.html","info":{"title":"delay","author":"forresto","description":"hold a stack of stack of data until buffer is full","iconUrl":"img/delay.png"}},
      // {"src":"http://forresto.github.com/meemoo-modules/timer.html","info":{"title":"timer","author":"forresto","description":"countdown to bang"}},
      {"src":"http://forresto.github.com/meemoo-modules/clock.html","info":{"title":"clock","author":"forresto","description":"time: hours minutes seconds with percentages","iconUrl":"img/clock.png"}},
      // {"src":"http://forresto.github.com/meemoo-modules/metronome.html","info":{"title":"metronome","author":"forresto","description":"meemoo.js module for rhythm in bpm or ms"}},
      {"src":"http://forresto.github.com/meemoo-modules/taptempo.html","info":{"title":"taptempo","author":"forresto","description":"tap out your rhythm, averages last 4 taps","iconUrl":"img/taptempo.png"}},
      {"src":"http://forresto.github.com/meemoo-modules/audioarray.html","info":{"title":"audioarray","author":"forresto","description":"hold and address a stack of audio objects","iconUrl":"img/audioarray.png"}},
      {"src":"http://forresto.github.com/meemoo-modules/speech2text.html","info":{"title":"speech2text","author":"forresto","description":"speech to text with x-webkit-speech","iconUrl":"img/speech2text.png"}},
      {"src":"http://forresto.github.com/meemoo-speak.js/text2speech.html","info":{"title":"text2speech","author":"forresto","description":"text to speech with speak.js","iconUrl":"img/text2speech.png"}},
      
      {"src":"http://127.0.0.1:8888/mapmarker","info":{"title":"mapmarker","author":"tian","description":"text to speech with speak.js","iconUrl":"img/mapmarker.png"}},
      {"src":"http://127.0.0.1:8888/address2location","info":{"title":"address2location","author":"tian","description":"text to speech with speak.js","iconUrl":"img/address2location.png"}},
         
    ]
  };
  
  Iframework.loadLibrary(library);

});

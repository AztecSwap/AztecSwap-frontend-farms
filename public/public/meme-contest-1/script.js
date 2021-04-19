
function loadEntries() {
    var tweets = ["1370979511114735626", "1370838073609621505", "1371470073777381381", "1370827288997150720", "1371040747349180421", "1371044864704475136", "1370960371788357632", "1370827947066671106", "1371232144568197121", "1370774705716756484", "1370827193534836736", "1371049334234513417", "1371045040642949123", "1371124084415733760", "1370914820141158403", "1371049094551007234", "1371241379003658240", "1371147735433240578", "1371139588681560066", "1371148099016552448", "1370917531695865856", "1371246539922763777", "1370770842397851653", "1371113720378617858", "1371120028339204099", "1371034021787004928", "1371051840104660992", "1371232564686376961", "1371028079695572994", "1371172526898905091", "1370822992238936066", "1371027010181500930", "1371078859555180547", "1371017041537159169", "1370831961305010183", "1371037375233626114", "1371264246105796613", "1371262151294296068", "1370818893669937154", "1371262774811107329", "1371115392710549505", "1371181067319664644", "1371123312735133696", "1370760852769533954", "1371026119714045956", "1371288740317040645", "1371141265060995072", "1371290289210589184", "1371421689167241220"];

    var tweetList = document.querySelector("#tweetlistEntries");
    var tweet = "";

    //iterate and create li based on array
    for (var i = 0; i < tweets.length; i++) {
      let id = tweets[i];
      // tweet.innerHTML = twttr.widgets.createTweet(id, tweet);
      tweet += "<div id='" + tweets[i] + "' class='tweet col-sm-4'></div>";
    }

    //place all item into the container
    tweetList.innerHTML += tweet;

    //get all list items
    var tweetItems = tweetList.querySelectorAll(".tweet");

    //iterate through items and embed tweet based on id attr
    for (let i = 0; i < tweetItems.length; i++) {
      let id = tweetItems[i].getAttribute("id");
      let tweet = tweetItems[i];
      twttr.widgets.createTweet(id, tweet, {
        align: "center",
        conversation: "none",
      });
    }

    document.getElementById('linkLoadEntries').innerHTML = 'loading...';
    document.getElementById('telegramEntries').style.display = 'block';
}

// loadEntries();
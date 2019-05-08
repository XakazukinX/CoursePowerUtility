console.log("いや〜んえっち");

const areas = $("textarea");
const jugyoInfo = $("#cs_loginInfo_left");
let jugyoName = jugyoInfo[0].childNodes[1].childNodes[1].childNodes[1].text;
let jugyoNumber = jugyoInfo[0].childNodes[1].childNodes[2].childNodes[1].text;
let saveName = jugyoName + jugyoNumber;

for(var i=0;i<areas.length;i++)
{
	let strageInfo = localStorage.getItem(saveName+areas[i].name);
	if(strageInfo == null)
	{
		localStorage.setItem(saveName+areas[i].name, "");
	}
	else
	{
		areas[i].value = localStorage.getItem(saveName+areas[i].name, areas[i].value);
	}
}

$("body").append("<div id='counter'></div>");
$("#counter").hide();

$("textarea").on("keyup",textAreaUpdate);
$("textarea").on("click",function(){
	$("#counter").show().text(this.value.length);
})
$(window).on("keydown",function(e){
	send(e)
});


function textAreaUpdate() 
{
	$("#counter").show().text(this.value.length);
	for(var i=0;i<areas.length;i++)
	{
		localStorage.setItem(saveName+areas[i].name, areas[i].value);
	}
}

function send(e)
{
	if(e.ctrlKey || e.metaKey)
	{
		if(e.keyCode == 13)
		{
			$(".menu01").click();
			return true;
		}
	}
}


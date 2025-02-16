//Drag
//取消原版不允许被放置的属性
function allowDropMLIM(ev) {
	ev.preventDefault();
}
window.allowDropMLIM = allowDropMLIM;

//记录被拖拽的div的id
function dragMLIM(ev) {
    ev.dataTransfer.setData("Text", ev.target.id);
}
window.dragMLIM = dragMLIM;

//拖拽入恋人区域时，将NPC名称加入List中
function dropLoveMLIM(ev) {
	ev.preventDefault();
    var data = ev.dataTransfer.getData("Text");
	if (T.potentialLoveInterests.includes(data)) {
		V.loveInterestList.pushUnique(data);
		if (V.transformationParts.traits.mateForLife !== "disabled" && V.options.mateForLifeDebuff) {
			Wikifier.wikifyEval("<<loveInterestListCheck>>");
		}
		Wikifier.wikifyEval("<<UpdateLoveInterestList>>");
		Wikifier.wikifyEval("<<UpdatePotentialLoveInterestList>>");
	}
}
window.dropLoveMLIM = dropLoveMLIM;

//拖拽入非恋人区域时，将NPC名称移出List
function dropNonLoveMLIM(ev) {
	ev.preventDefault();
    var data = ev.dataTransfer.getData("Text");
	V.loveInterestList.delete(data);
	if (V.transformationParts.traits.mateForLife !== "disabled" && V.options.mateForLifeDebuff) {
		Wikifier.wikifyEval("<<loveInterestListCheck>>");
	}
	Wikifier.wikifyEval("<<UpdateLoveInterestList>>");
	Wikifier.wikifyEval("<<UpdatePotentialLoveInterestList>>");
}
window.dropNonLoveMLIM = dropNonLoveMLIM;

//在恋人区域内时，将拖拽NPC和目标NPC次序互换
function dropLoveItemMLIM(ev) {
	ev.preventDefault();
    var data = ev.dataTransfer.getData("Text");
	if (T.potentialLoveInterests.includes(data)) {
		if (V.loveInterestList.includes(data)) {
			T.targetId=ev.currentTarget.id;
			var index1=findIndexMLIM(V.loveInterestList,data);
			var index2=findIndexMLIM(V.loveInterestList,T.targetId);
			T.temp=V.loveInterestList[index1];
			V.loveInterestList[index1]=V.loveInterestList[index2];
			V.loveInterestList[index2]=T.temp;
		} else {
			V.loveInterestList.pushUnique(data);
		}
	}
}
window.dropLoveItemMLIM = dropLoveItemMLIM;

//调取List中NPC名称的序号用于互换次序
function findIndexMLIM(arr, element) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return i;
        }
    }
    return -1; // 如果元素不存在于数组中，返回-1
}
window.findIndexMLIM = findIndexMLIM;

//在某些浏览器中防止拖拽出现新的标签页
document.body.ondrop = function (ev) {
	ev.preventDefault()
	ev.stopPropagation()
  }
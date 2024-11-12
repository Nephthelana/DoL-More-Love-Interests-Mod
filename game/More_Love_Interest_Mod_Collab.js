// 判断是否加载了动车(Eudemonism00)的NPC头像图标增添mod
function hasNPCAvatarsModInfo() {
    const NPCAvatarsModInfo = window.modUtils.getMod('NPC Avatars Mod');
    if (NPCAvatarsModInfo) {
        return true;
    }
    return false;
}
window.hasNPCAvatarsModInfo = hasNPCAvatarsModInfo;

function hasNPCAvatarsModSFInfo() {
    const NPCAvatarsModInfo = window.modUtils.getMod('NPC Avatars Mod (SF)');
    if (NPCAvatarsModInfo) {
        return true;
    }
    return false;
}
window.hasNPCAvatarsModSFInfo = hasNPCAvatarsModSFInfo;

// 判断是否加载了雷米恋爱mod
function hasRemyLoveModInfo() {
    const RemyLoveModInfo = window.modUtils.getMod('Remy Love Mod');
    if (RemyLoveModInfo) {
        return true;
    }
    return false;
}
window.hasRemyLoveModInfo = hasRemyLoveModInfo;

//Drag
function allowDrop(ev) {
	ev.preventDefault();
}
window.allowDrop = allowDrop;

function drag(ev) {
	ev.dataTransfer.setData("Text",ev.target.id);
}
window.drag = drag;

function dropLove(ev) {
	ev.preventDefault();
	var data=ev.dataTransfer.getData("Text");
	if (T.potentialLoveInterests.includes(data)) {
		V.loveInterestList.pushUnique(data);
		Wikifier.wikifyEval("<<UpdateLoveInterestList>>");
		Wikifier.wikifyEval("<<UpdatePotentialLoveInterestList>>");
	}
}
window.dropLove = dropLove;

function dropNonLove(ev) {
	ev.preventDefault();
	var data=ev.dataTransfer.getData("Text");
	V.loveInterestList.delete(data);
	Wikifier.wikifyEval("<<UpdateLoveInterestList>>");
	Wikifier.wikifyEval("<<UpdatePotentialLoveInterestList>>");
}
window.dropNonLove = dropNonLove;
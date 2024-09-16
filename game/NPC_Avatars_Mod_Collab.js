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
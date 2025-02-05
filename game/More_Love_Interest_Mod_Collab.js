// 该部分js已不再被调用，但还是该留着

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
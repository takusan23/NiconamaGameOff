/**
 * 無効化ボタンを押すJavaScript。
 * そういえば香川県のゲーム条例どうなったの？
 */
window.onload = () => {
    // 設定を開く
    const settingButton = document.getElementsByClassName('___setting-button___2e-c9')[0]
    settingButton.click()
    // 詳細設定を開く
    const showMoreSettingPanel = document.getElementsByClassName('___detail-setting-button___2t57H ___detail-setting-button___2m9Nn')[0]
    showMoreSettingPanel.click()
    // なんか遅延させないと動かないので・・？
    setTimeout(() => {
        // ゲーム・ギフト・エモーション演出を非表示にする の要素
        const niconamaGameOffSwitch = document.getElementsByClassName('___target___1Oicc ___target___21D1y')[4]
        // 演出非表示OFFのときだけONにする
        if (niconamaGameOffSwitch.getAttribute('aria-pressed') === 'false') {
            // 押す
            niconamaGameOffSwitch.click()
            // 結果
            console.log(`ニコ生ゲームを無効にする：${niconamaGameOffSwitch.getAttribute('aria-pressed')}`)
        }
        // 閉じるボタンを押す
        const closeMoreSettingPanel = document.getElementsByClassName('___close-button___23Wwj ___close-button___fQHeK')[0]
        closeMoreSettingPanel.click()
    }, 100)
    // あと「エモーションボタン」を非表示にする
    const emotionButton = document.getElementsByClassName('___emotion-button___1Rolf ___button___Re8M9')[0]
    emotionButton.style.display = 'none'
}
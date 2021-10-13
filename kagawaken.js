/**
 * 無効化ボタンを押すJavaScript。
 * そういえば香川県のゲーム条例どうなったの？
 */
window.onload = () => {
    // 設定を開く
    const settingButton = Array.from(document.getElementsByTagName('button')).find(button => button.getAttribute('aria-label') === '設定')
    settingButton.click()
    // 詳細設定を開く
    const showMoreSettingPanel = Array.from(document.getElementsByTagName('button')).find(button => button.textContent === '詳細設定を開く')
    showMoreSettingPanel.click()
    // なんか遅延させないと動かないので・・？
    setTimeout(() => {
        // ゲーム・ギフト・エモーション演出を非表示にする の要素
        const niconamaGameOffLabelId = Array.from(document.getElementsByTagName('label')).find(label => label.textContent === 'ゲーム・ギフト・エモーション演出を非表示にする').getAttribute('for');
        const niconamaGameOffSwitch = document.getElementById(niconamaGameOffLabelId);
        // 演出非表示OFFのときだけONにする
        if (niconamaGameOffSwitch !== undefined && niconamaGameOffSwitch.getAttribute('aria-pressed') === 'false') {
            // 押す
            niconamaGameOffSwitch.click()
            // 結果
            console.log(`ニコ生ゲームを無効にする：${niconamaGameOffSwitch.getAttribute('aria-pressed')}`)
        } else {
            // 無いとき
            const notLoginGameOffSwitch = document.getElementsByClassName('___target___1Oicc ___target___21D1y')[3]
            notLoginGameOffSwitch.click()
            // 結果
            console.log(`未ログイン時でニコ生ゲームを無効にする：${notLoginGameOffSwitch.getAttribute('aria-pressed')}`)
        }
        // 閉じるボタンを押す
        const closeMoreSettingPanel = Array.from(document.getElementsByTagName('button')).filter((element) => element.className.match('close') && element.className.match('button'))[0]
        closeMoreSettingPanel.click()
    }, 500)
    // あと「エモーションボタン」を非表示にする
    // const emotionButton = document.getElementsByClassName('___emotion-button___1Rolf ___button___Re8M9')[0]
    // emotionButton.style.display = 'none'
}
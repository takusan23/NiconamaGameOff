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
        // ゲーム・ギフト・エモーション演出を表示 の要素
        const niconamaGameOffLabelId = Array.from(document.getElementsByTagName('label')).find(label => label.textContent === 'ゲーム・ギフト・エモーション演出を表示').getAttribute('for');
        const niconamaGameOffSwitch = document.getElementById(niconamaGameOffLabelId);
        // 演出表示 ON のときだけ OFF にする
        if (niconamaGameOffSwitch && niconamaGameOffSwitch.getAttribute('aria-pressed') === 'true') {
            // 押す
            niconamaGameOffSwitch.click()
            // 結果
            console.log(`ニコ生ゲームの表示：${niconamaGameOffSwitch.getAttribute('aria-pressed')}`)
        }
        // 閉じるボタンを押す
        const closeMoreSettingPanel = Array.from(Array.from(document.getElementsByTagName('h2')).find(label => label.textContent === '詳細設定').parentNode.children).filter((element) => element.className.match('button'))[0]
        closeMoreSettingPanel.click()
    }, 500)
    // あと「エモーションボタン」を非表示にする
    // const emotionButton = document.getElementsByClassName('___emotion-button___1Rolf ___button___Re8M9')[0]
    // emotionButton.style.display = 'none'
}
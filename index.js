function superbowlWin(records) {
    const win = records.find(entry => entry.result === 'W')
    debugger
    if (win) { return win.year }
}

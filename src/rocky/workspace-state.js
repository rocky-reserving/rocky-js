class WorkspaceWindow {
  constructor(titleText, windowType, content) {
    this.titleText = titleText;
    this.windowType = windowType;
    this.content = content;
  }
  updateTitleText(newTitleText) {
    this.titleText = newTitleText;
  }
  updateWindowType(newWindowType) {
    this.windowType = newWindowType;
  }
  updateContent(newContent) {
    this.content = newContent;
  }
}

class WorkspaceState {
  constructor(_state = []) {
    this._state = _state;
    this._length = _state.length;
  }
  addWindow(titleText, windowType, content) {
    let wsWindow = {
      id: this._length,
      window:new WorkspaceWindow(titleText, windowType, content),
    }
    this._state.push(wsWindow);
    this._length++;
  }
  removeWindow(id) {
    this._state = this._state.filter((wsWindow) => wsWindow.id !== id);
  }
  get state() {
    return this._state;
  }
  get length() {
    return this._length;
  }
  getWindow(id) {
    return this._state.find((wsWindow) => wsWindow.id === id);
  }
}

export { WorkspaceState, WorkspaceWindow };
import { ipcRenderer } from 'electron';
import getInitialStateRenderer from '../getInitialStateRenderer';

jest.unmock('../getInitialStateRenderer');

describe('getInitialStateRenderer', () => {
  it('should return the initial state', () => {
    const state = { foo: 456 };
    ipcRenderer.sendSync.mockImplementation(() => JSON.stringify(state));

    expect(getInitialStateRenderer()).toEqual(state);
  });
});

import action from '../../../src/store/modules/main/actions';
import * as api from '../../../src/api/index';
jest.mock('../../../src/api/index')


describe('actions', () => {
  let commit;
  let state;
  let resp;
  console.error = jest.fn();

  beforeEach(() => {
    commit = jest.fn();
    state = jest.fn();
  })

  it('When promise resolves runs commit with correct arguments', async () => {
    resp = 'success'
    api.getThemAll.mockImplementation(() => Promise.resolve(resp));
    await action.CATCH_THEM_ALL({commit, state})
    expect(commit).toBeCalledWith('STORE_THEM_ALL', 'success');
  })

  it('When promise rejects commit is not called', async () => {
    commit = jest.fn();
    state = jest.fn();
    resp = new Error();
    api.getThemAll.mockImplementation(() => Promise.reject(resp));
    await action.CATCH_THEM_ALL({commit, state});
    expect(commit).not.toHaveBeenCalled();
  })
})

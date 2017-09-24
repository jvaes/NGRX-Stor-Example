import { TaskingModule } from './tasking.module';

describe('TaskingModule', () => {
  let taskingModule: TaskingModule;

  beforeEach(() => {
    taskingModule = new TaskingModule();
  });

  it('should create an instance', () => {
    expect(taskingModule).toBeTruthy();
  });
});

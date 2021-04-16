import { TestBed } from '@angular/core/testing';

import { KanbanAPIService } from './kanban-api.service';

describe('KanbanAPIService', () => {
  let service: KanbanAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KanbanAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { html, Page } from 'rune-ts';
import { TutorialLayout, type TutorialLayoutData } from '../TutorialLayout';
import { main } from './SettingPage';
import { main as main2 } from './TodoPage';
import { StyleView } from './style';
import type { RuneRouter } from '@rune-ts/server';

export type Meetup = Record<string, string>;

export interface MeetupRouter extends RuneRouter {
  ['/tutorials']: (pageData: Meetup, layoutData: TutorialLayoutData) => TutorialLayout;
}

export const MeetupRouter: MeetupRouter = {
  ['/tutorials'](pageData: Meetup, layoutData: TutorialLayoutData): TutorialLayout {
    return new TutorialLayout(layoutData, new MeetupPage(pageData, { is_mobile: true }));
  },
};

export class MeetupPage extends Page<Meetup> {
  override template() {
    return html`
      <div>
        ${new StyleView({})}
        <div id="tutorial"></div>
      </div>
    `;
  }

  override onMount() {
    main();
    main2();
  }
}

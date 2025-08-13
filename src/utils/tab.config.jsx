// navigation/tab.config.js

// --- Importe as telas ---
import { Feed } from '../pages/Feed';
import { Search } from '../pages/PagesBottomBar/Explore';
import { Health } from '../pages/PagesBottomBar/Health';
import { Msg } from '../pages/PagesBottomBar/Msg';

// --- Importe os ícones ---
import HomeIcon from '../../assets/bottomBar/Home.svg';
import SearchIcon from '../../assets/bottomBar/Search.svg';
import HealthIcon from '../../assets/bottomBar/Health.svg';
import ConversationIcon from '../../assets/bottomBar/Conversation.svg';
import BlueHomeIcon from '../../assets/bottomBar/BlueIcons/BlueHome.svg';
import BlueSearchIcon from '../../assets/bottomBar/BlueIcons/BlueSearch.svg'; // Corrigido aqui
import BlueHealthIcon from '../../assets/bottomBar/BlueIcons/BlueHealth.svg';
import BlueConversationIcon from '../../assets/bottomBar/BlueIcons/BlueConversation.svg';

export const TAB_CONFIG = {
  'Início': {
    component: Feed,
    icons: {
      active: BlueHomeIcon,
      inactive: HomeIcon,
    },
  },
  'Explorar': {
    component: Search,
    icons: {
      active: BlueSearchIcon,
      inactive: SearchIcon,
    },
  },
  'Minha Saúde': {
    component: Health,
    icons: {
      active: BlueHealthIcon,
      inactive: HealthIcon,
    },
  },
  'Conversas': {
    component: Msg,
    icons: {
      active: BlueConversationIcon,
      inactive: ConversationIcon,
    },
  },
};

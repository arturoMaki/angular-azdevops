import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsArticle extends Schema.Component {
  collectionName: 'components_components_articles';
  info: {
    displayName: 'Article';
    description: '';
  };
  attributes: {
    new: Attribute.Relation<'components.article', 'oneToOne', 'api::new.new'>;
  };
}

export interface ComponentsSection extends Schema.Component {
  collectionName: 'components_shared_sections';
  info: {
    displayName: 'Section';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Subtitle: Attribute.String;
  };
}

export interface GlobalComponentsFooter extends Schema.Component {
  collectionName: 'components_global_footers';
  info: {
    displayName: 'Footer';
    description: '';
  };
  attributes: {
    Link: Attribute.Component<'shared.link', true>;
  };
}

export interface GlobalComponentsHeader extends Schema.Component {
  collectionName: 'components_global_components_headers';
  info: {
    displayName: 'Header';
    description: '';
  };
  attributes: {
    data_pages: Attribute.Relation<
      'global-components.header',
      'oneToMany',
      'api::data-page.data-page'
    >;
  };
}

export interface SharedLink extends Schema.Component {
  collectionName: 'components_link_links';
  info: {
    displayName: 'Link';
    description: '';
  };
  attributes: {
    Href: Attribute.String;
    Text: Attribute.String;
    Target: Attribute.Enumeration<['_self', '_blank', '_parent', '_top']>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.article': ComponentsArticle;
      'components.section': ComponentsSection;
      'global-components.footer': GlobalComponentsFooter;
      'global-components.header': GlobalComponentsHeader;
      'shared.link': SharedLink;
    }
  }
}

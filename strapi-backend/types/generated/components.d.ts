import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsAlert extends Schema.Component {
  collectionName: 'components_components_alerts';
  info: {
    displayName: 'Alert';
    description: '';
  };
  attributes: {
    Content: Attribute.Text;
  };
}

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

export interface ComponentsCard extends Schema.Component {
  collectionName: 'components_components_cards';
  info: {
    displayName: 'Card';
    description: '';
  };
  attributes: {
    relational_field: Attribute.Relation<
      'components.card',
      'oneToOne',
      'api::new.new'
    >;
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
  attributes: {};
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

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.alert': ComponentsAlert;
      'components.article': ComponentsArticle;
      'components.card': ComponentsCard;
      'components.section': ComponentsSection;
      'global-components.footer': GlobalComponentsFooter;
      'global-components.header': GlobalComponentsHeader;
      'shared.link': SharedLink;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
    }
  }
}

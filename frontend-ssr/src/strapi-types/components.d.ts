import type { Schema, Attribute } from '@strapi/strapi';

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

export interface ComponentsTabGroup extends Schema.Component {
  collectionName: 'components_components_tab_groups';
  info: {
    displayName: 'TabGroup';
    description: '';
  };
  attributes: {
    component: Attribute.Component<'shared.tab', true>;
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
  attributes: {};
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

export interface SharedTab extends Schema.Component {
  collectionName: 'components_shared_tabs';
  info: {
    displayName: 'Tab';
  };
  attributes: {
    Label: Attribute.String;
    Content: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.card': ComponentsCard;
      'components.tab-group': ComponentsTabGroup;
      'global-components.footer': GlobalComponentsFooter;
      'global-components.header': GlobalComponentsHeader;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
      'shared.tab': SharedTab;
    }
  }
}

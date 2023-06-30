(function(global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? (module.exports = factory())
    : typeof define === 'function' && define.amd
    ? define(factory)
    : ((global = global || self), (global.mdprofile = factory()));
})(this, function() {
  'use strict';

  var full = {
    identifier: 'full',
    namespace: 'org.adiwg.profile',
    alternateId: ['full'],
    title: 'Full',
    description: 'Every supported component',
    version: '0.2.4',
    components: {
      record: {},
      contact: {},
      dictionary: {}
    },
    nav: {
      record: [
        {
          title: 'Main',
          target: 'record.show.edit.main',
          tip: 'Basic information about the resource.'
        },
        {
          title: 'Metadata',
          target: 'record.show.edit.metadata',
          tip: 'Information about the metadata for the resource.'
        },
        {
          title: 'Keywords',
          target: 'record.show.edit.keywords',
          tip: 'Terms used to describe the resource.'
        },
        {
          title: 'Extent',
          target: 'record.show.edit.extent',
          tip: 'Information describing the bounds of the resource.'
        },
        {
          title: 'Spatial',
          target: 'record.show.edit.spatial',
          tip: 'Information concerning the spatial attributes of the resource.'
        },
        {
          title: 'Lineage',
          target: 'record.show.edit.lineage',
          tip: 'Information on the history of the resource.'
        },
        {
          title: 'Taxonomy',
          target: 'record.show.edit.taxonomy',
          tip: 'Information on the taxa associated with the resource.'
        },
        {
          title: 'Distribution',
          target: 'record.show.edit.distribution',
          tip: 'Information about obtaining the resource.'
        },
        {
          title: 'Constraints',
          target: 'record.show.edit.constraint',
          tip: 'Information about constraints applied to the resource.'
        },
        {
          title: 'Associated',
          target: 'record.show.edit.associated',
          tip: 'Other resources with a defined relationship to the resource.'
        },
        {
          title: 'Documents',
          target: 'record.show.edit.documents',
          tip: 'Other documents related to, but not defining, the resource.'
        },
        {
          title: 'Funding',
          target: 'record.show.edit.funding',
          tip:
            'Information about funding allocated to development of the resource.'
        },
        {
          title: 'Dictionaries',
          target: 'record.show.edit.dictionary',
          tip: 'Data dictionaries associated with the resource.'
        }
      ],
      dictionary: [
        {
          title: 'Main',
          target: 'dictionary.show.edit.index',
          tip: 'Basic information about the dictionary.'
        },
        {
          title: 'Citation',
          target: 'dictionary.show.edit.citation',
          tip: 'The citation for the dictionary.'
        },
        {
          title: 'Domains',
          target: 'dictionary.show.edit.domain',
          tip: 'Information about defined value lists.'
        },
        {
          title: 'Entities',
          target: 'dictionary.show.edit.entity',
          tip:
            'Information about entities(tables) and attributes(columns or fields).'
        }
      ]
    }
  };

  var raster = {
    identifier: 'raster',
    namespace: 'org.adiwg.profile',
    alternateId: ['raster'],
    title: 'raster',
    description: 'Document a raster',
    version: '0.2.4',
    components: {
      record: {
        main: {
          resourceType:{
            resourceType:false,
            name: false
          },
          pointOfContact:false,
          basicInformation: {
            recordId: false
          },
          defaultLocale: {
            country: false
          },
          citation: {
            basicInformation: {
              alternateTitle: false,
              dates: {
                dateItem: {
                  date: false,
                  dateType: false,
                  description: false
                }
              },
              edition: false,
              presentationForm: false
            },
            responsibleParty: {
              role: false,
              contacts: false
            },
            onlineResource: {
              name: false,
              url: false,
              protocol: false,
              description: false,
              onlineFunction: false,
              applicationProfile: false,
              protocolRequest: false
            },
            identifier: {
              identifier: false,
              namespace: false,
              version: false,
              description: false,
              authority: {
                basicInformation: {
                  title: false,
                  alternateTitle: false,
                  date: false,
                  dateArray: {
                    date: false,
                    dateType: false,
                    description: false
                  }
                },
                responsibleParty: {
                  role: false,
                  contacts: false
                },
                onlineResource: {
                  name: false,
                  url: false,
                  protocol: false,
                  description: false,
                  onlineFunction: false,
                  applicationProfile: false,
                  protocolRequest: false
                },
                identifier: false,
                identifierSimple: {
                  identifier: false,
                  namespace: false,
                  version: false,
                  description: false
                },
                identifierShort: {
                  identifier: false,
                  namespace: false,
                  version: false,
                  description: false
                }
              }
            },
            identifierSimple: {
              identifier: false,
              namespace: false,
              version: false,
              description: false,
              authority: {
                basicInformation: {
                  title: false,
                  alternateTitle: false,
                  date: false,
                  dateArray: false
                },
                responsibleParty: false,
                onlineResource: false,
                identifier: false,
                identifierSimple: false,
                identifierShort: false
              }
            },
            identifierShort: false,
            series: {
              name: false,
              issue: false,
              page: false
            },
            otherCitationDetails: false,
            graphic: {
              fileName: false,
              fileType: false,
              fileDescription: false,
              onlineResource: {
                name: false,
                url: false,
                protocol: false,
                description: false,
                onlineFunction: false,
                applicationProfile: false,
                protocolRequest: false
              }
            }
          },
          description: {
            abstract: false,
            shortAbstract: false
          },
          purpose: false,
          supplementalInfo: false,
          environmentDescription: false,
          timePeriod: {
            dateRange: {
              fiscalyear: false
            },
            identifier: false,
            description: false,
            periodName: false,
            interval: {
              intervalAmount: false,
              units: false
            },
            duration: {
              years: false,
              months: false,
              days: false,
              hours: false,
              minutes: false,
              seconds: false
            }
          },
          maintenance: false,
          graphicOverview: false,
          credit: false
        },
        extent: {
          geographic: {
            description: false,
            containsData: false
          }
        }
      }
    },
    nav: {
      record: [
        {
          title: 'Main',
          target: 'record.show.edit.main',
          tip: 'Basic information about the project.'
        },
        {
          title: 'Metadata',
          target: 'record.show.edit.metadata',
          tip: 'Information about the metadata for the resource.'
        },
        {
          title: 'Extent',
          target: 'record.show.edit.extent',
          tip: 'Information describing the bounds of the project.'
        }
      ]
    }
  };

  var schema = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    $id: 'profile-schema',
    version: '0.2.4',
    type: 'object',
    description: 'JSON schema for mdEditor profile definitions',
    additionalProperties: false,
    properties: {
      identifier: {
        type: 'string'
      },
      alternateId: {
        type: 'array',
        description: 'List of alternate identifiers for the profile definition',
        items: {
          type: 'string'
        }
      },
      namespace: {
        type: 'string'
      },
      title: {
        type: 'string'
      },
      description: {
        type: 'string'
      },
      version: {
        type: 'string'
      },
      components: {
        $ref: '#/definitions/Components'
      },
      nav: {
        $ref: '#/definitions/Nav'
      }
    },
    required: ['description', 'identifier', 'namespace', 'title', 'version'],
    title: 'Profile definition',
    anyOf: [
      {
        type: 'object',
        title: 'components is required',
        required: ['components']
      },
      {
        type: 'object',
        title: 'nav is required',
        required: ['nav']
      }
    ],
    definitions: {
      Components: {
        type: 'object',
        additionalProperties: false,
        properties: {
          record: {
            $ref: '#/definitions/Component'
          },
          contact: {
            $ref: '#/definitions/Component'
          },
          dictionary: {
            $ref: '#/definitions/Component'
          }
        },
        title: 'Components'
      },
      Component: {
        type: 'object'
      },
      Nav: {
        type: 'object',
        additionalProperties: true,
        propertyNames: {
          enum: ['record', 'contact', 'dictionary']
        },
        patternProperties: {
          '{record|contact|dictionary': {
            $ref: '#/definitions/NavItem'
          }
        },
        title: 'Nav'
      },
      NavItem: {
        type: 'array',
        items: {
          type: 'object',
          additionalProperties: false,
          properties: {
            title: {
              type: 'string'
            },
            target: {
              type: 'string'
            },
            tip: {
              type: 'string'
            }
          },
          required: ['target', 'tip', 'title'],
          title: 'NavItem'
        },
        title: 'Navigation Section'
      }
    }
  };

  var pkg = {
    name: 'mdprofiles',
    version: '0.2.4',
    description: 'Profiles for the mdEditor',
    main: 'index.js',
    module: 'dist/mdprofile.es.js',
    browser: 'dist/mdprofile.umd.js',
    scripts: {
      pretest: 'npm run build',
      test: 'mocha',
      build: 'rollup -c',
      release: 'release-it',
      deploy: 'NODE_DEBUG=gh-pages node scripts/pages.js'
    },
    repository: {
      type: 'git',
      url: 'git+https://github.com/adiwg/mdProfile.git'
    },
    keywords: ['mdEditor', 'metadata', 'mdJSON'],
    files: ['resources', 'src', 'dist'],
    author: 'jlblcc',
    license: 'Unlicense',
    bugs: {
      url: 'https://github.com/adiwg/mdProfile/issues'
    },
    homepage: 'https://github.com/adiwg/mdProfile#readme',
    devDependencies: {
      eslint: '^6.5.1',
      'eslint-config-prettier': '^6.4.0',
      'eslint-plugin-node': '^10.0.0',
      'eslint-plugin-prettier': '^3.1.0',
      'gh-pages': '^2.1.1',
      husky: '^3.0.8',
      'lint-staged': '^9.4.2',
      mocha: '^6.2.1',
      prettier: '^1.18.2',
      'release-it': '^12.4.3',
      'replace-in-file': '^4.1.3',
      rollup: '^1.23.1',
      'rollup-plugin-commonjs': '^10.1.0',
      'rollup-plugin-json': '^4.0.0',
      'rollup-plugin-node-resolve': '^5.2.0',
      'rollup-plugin-replace': '^2.2.0',
      semver: '^6.3.0'
    },
    husky: {
      hooks: {
        'pre-commit': 'lint-staged'
      }
    },
    'lint-staged': {
      '*.{js,json,css,md}': ['prettier --write', 'git add']
    },
    dependencies: {
      ajv: '^6.10.0'
    },
    directories: {
      test: 'test'
    }
  };

  /**
   * @module mdProfile
   */

  const version = pkg.version;

  function asArray() {
    return [full, raster];
  }

  var main = { full, raster, schema, asArray, version };

  return main;
});

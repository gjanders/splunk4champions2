import React from 'react';
import Settings from '@splunk/react-icons/Settings';
import Activity from '@splunk/react-icons/Activity';
import Search from  '@splunk/react-icons/Search';
import Metrics from  '@splunk/react-icons/Metrics';
import Dashboard from  '@splunk/react-icons/Dashboard';
import ChartScatter from  '@splunk/react-icons/ChartScatter';
import Tool from  '@splunk/react-icons/Tool';
import Data from  '@splunk/react-icons/Data'


const labs = {
    chapters: [
        {
            "title": "1 - Settings",
            "id": "one",
            "icon": <Settings/>,
            "subtitle": "test",
            "sections": [
                {
                    "title": "Set your preferences",
                    "steps": [
                        {
                            "title": "Splunk Search Assistant",
                            "content": "chapter1/search_assistant_1.mdx"
                        },
                        {
                            "title": "Splunk Search Assistant",
                            "content": "chapter1/search_assistant_2.mdx"
                        },
                        {
                            "title": "Line Numbers",
                            "content": "chapter1/line_numbers.mdx"
                        },
                        {
                            "title": "Search auto-format",
                            "content": "chapter1/search_auto_format.mdx"
                        },
                        {
                            "title": "Themes",
                            "content": "chapter1/themes.mdx"
                        },
                        {
                            "title": "Useful links",
                            "content": "chapter1/useful_links.mdx"
                        }
                    ]
                },
                {
                    "title": "Search Mode",
                    "steps": [
                        {
                            "title": "Fast Mode",
                            "content": "chapter1/fast_mode.mdx"
                        },
                        {
                            "title": "Smart Mode",
                            "content": "chapter1/smart_mode.mdx"
                        },
                        {
                            "title": "Verbose Mode",
                            "content": "chapter1/verbose_mode.mdx"
                        },
                        {
                            "title": "Useful links",
                            "content": "chapter1/useful_links.mdx"
                        }
                    ]
                },
                {
                    "title": "Reformat Search",
                    "steps": [
                        {
                            "title": "Make searches easier to read",
                            "content": "chapter1/make_searches_easier_to_read.mdx"
                        }, 
                        {
                            "title": "Useful links",
                            "content": "chapter1/useful_links.mdx"
                        }, 
                        {
                            "title": "",
                            "content": "chapter7/standard.mdx"
                        }
                    ]
                },
                {
                    "title": "Language Settings",
                    "steps": [
                        {
                            "title": "User language and locale",
                            "content": "chapter1/user_language_locale.mdx"
                        }, 
                        {
                            "title": "Useful links",
                            "content": "chapter1/useful_links.mdx"
                        }
                    ]
                },
                {
                    "title": "Comments",
                    "steps": [
                        {
                            "title": "",
                            "content": "chapter1/comments.mdx"
                        }, 
                        {
                            "title": "Useful links",
                            "content": "chapter1/useful_links.mdx"
                        }
                    ]
                }
            ]
        },
        {
            "title": "2 - Inspector",
            "id": "two",
            "subtitle": "test",
            "icon": <Activity/>,
            "sections": [
                {
                    "title": "Using Job inspector",
                    "steps": [
                        {
                            "title": "Using Inspector",
                            "content": "chapter2/using_inspector.mdx"
                        },
                        {
                            "title": "Useful Links",
                            "content": "chapter2/useful_links2.mdx"
                        }
                    ]
                }, 
                {
                    "title": "Inspector Lab",
                    "steps": [
                        {
                            "title": "Inspector Lab",
                            "content": "chapter2/inspector_lab.mdx"
                        },
                        {
                            "title": "Useful Links",
                            "content": "chapter2/useful_links2.mdx"
                        }
                    ]
                }
                
            ]
        },
        {
            "title": "3 - Data",
            "id": "three",
            "subtitle": "test",
            "icon": <Data/>,
            "sections": [
                {
                    "title": "How is data stored?",
                    "steps": [
                        {
                            "title": "Index and Buckets",
                            "content": "chapter3/index_and_buckets.mdx"
                        }, 
                        {
                            "title": "Useful Links",
                            "content": "chapter3/useful_links3.mdx"
                        }
                       
                    ]
                },
                {
                    "title": "Data Pipeline",
                    "steps": [
                        {
                            "title": "Pipeline",
                            "content": "chapter3/pipeline.mdx"
                        },
                        {
                            "title": "Segmentation",
                            "content": "chapter3/segmentation.mdx"
                        },
                        {
                            "title": "",
                            "content": "chapter3/termshigh.mdx"
                        },
                        {
                            "title": "Useful Links",
                            "content": "chapter3/useful_links3.mdx"
                        }
                    ]
                },
                {
                    "title": "What is in a bucket?",
                    "steps": [
                        {
                            "title": "Inside a bucket",
                            "content": "chapter3/inside_bucket.mdx"
                        },
                        {
                            "title": "Useful Links",
                            "content": "chapter3/useful_links3.mdx"
                        }
                       
                    ]
                },
                {
                    "title": "Distributed Architecture(s)",
                    "steps": [
                        {
                            "title": "Indexers and Clusters",
                            "content": "chapter3/indexers_and_clusters.mdx"
                        },
                        {
                            "title": "Useful Links",
                            "content": "chapter3/useful_links3.mdx"
                        }
                       
                    ]
                },

                {
                    "title": "Data aging",
                    "steps": [
                        {
                            "title": "Indexers and Clusters",
                            "content": "chapter3/data_aging.mdx"
                        },
                        {
                            "title": "Useful Links",
                            "content": "chapter3/useful_links3.mdx"
                        }
                       
                    ]
                }
                
            ]
        },
        {
            "title": "4 - Search",
            "id": "four",
            "subtitle": "test",
            "icon": <Search/>,
            "sections": [
                {
                    "title": "Search Basics",
                    "steps": [
                        {
                            "title": "Search Basics",
                            "content": "chapter4/basic_tipps.mdx"
                        },
                        {
                            "title": "Useful Links",
                            "content": "chapter4/useful_links4.mdx"
                        }
                       
                    ]
                },
               
                {
                    "title": "Command Types",
                    "steps": [
                        {
                            "title": "Search Command Types",
                            "content": "chapter4/types.mdx"
                        },
                        {
                            "title": "Useful Links",
                            "content": "chapter4/useful_links4.mdx"
                        }
                    ]
                },
                 
                {
                    "title": "TERM",
                    "steps": [
                        {
                            "title": "Using TERM",
                            "content": "chapter4/term.mdx"
                        }, 
                        {
                            "title": "Segmentation",
                            "content": "chapter3/segmentation.mdx"
                        },
                        {
                            "title": "",
                            "content": "chapter3/termshigh.mdx"
                        },
                        {
                            "title": "Useful Links",
                            "content": "chapter4/useful_links4.mdx"
                        }
                    ]
                },

                {
                    "title": "tstats",
                    "steps": [
                        {
                            "title": "Using tstats",
                            "content": "chapter4/tstats.mdx"
                        },
                        {
                            "title": "Useful Links",
                            "content": "chapter4/useful_links4.mdx"
                        }
                    ]
                },

                {
                    "title": "Search Tipps",
                    "steps": [
                        {
                            "title": "Search Tipps",
                            "content": "chapter4/more_tipps.mdx"
                        },
                        {
                            "title": "Useful Links",
                            "content": "chapter4/useful_links4.mdx"
                        }
                        
                    ]
                },

                {
                    "title": "Quiz",
                    "steps": [
                        {
                            "title": "Quiz",
                            "content": "chapter4/quiz.mdx"
                        },
                        {
                            "title": "Useful Links",
                            "content": "chapter4/useful_links4.mdx"
                        }
                        
                    ]
                },
                
            ]
        },
        {
            "title": "5 - Metrics",
            "id": "five",
            "subtitle": "test",
            "icon": <Metrics/>,
            "sections": [
                {
                    "title": "Metrics",
                    "steps": [
                        {
                            "title": "Metrics introduction",
                            "content": "chapter5/metrics_intro.mdx"
                        },
                        {
                            "title": "Useful Links",
                            "content": "chapter5/useful_links5.mdx"
                        }
                    ]
                },
                {
                    "title": "Onboarding Metrics",
                    "steps": [
                        {
                            "title": "Onboarding Metrics",
                            "content": "chapter5/metrics_onboard.mdx"
                        },
                        {
                            "title": "Useful Links",
                            "content": "chapter5/useful_links5.mdx"
                        }
                    ]
                },
                {
                    "title": "Searching Metrics",
                    "steps": [
                        {
                            "title": "Searching Metrics",
                            "content": "chapter5/metrics_search.mdx"
                        },
                        {
                            "title": "Useful Links",
                            "content": "chapter5/useful_links5.mdx"
                        }
                    
                    ]
                },
                {
                    "title": "Metrics Lab",
                    "steps": [
                        {
                            "title": "Metrics Lab",
                            "content": "chapter5/metrics_lab.mdx"
                        },
                        {
                            "title": "Useful Links",
                            "content": "chapter5/useful_links5.mdx"
                        }
                    ]
                }
                
            ]
        },
        {
            "title": "6 - Dashboards",
            "id": "six",
            "subtitle": "test",
            "icon": <Dashboard/>,
            "sections": [
                {
                    "title": "Base Search",
                    "steps": [
                        {
                            "title": "Base Search",
                            "content": "chapter6/base_search.mdx"
                        }, 
                        {
                            "title": "",
                            "content": "chapter7/standard.mdx"
                        }
                    ]
                },
                {
                    "title": "Drilldown",
                    "steps": [
                        {
                            "title": "Drilldown",
                            "content": "chapter6/drilldown.mdx"
                        }, 
                        {
                            "title": "",
                            "content": "chapter7/standard.mdx"
                        }
                    ]
                },
                {
                    "title": "Tokens",
                    "steps": [
                        {
                            "title": "Switch with tokens",
                            "content": "chapter6/tokens.mdx"
                        }
                    ]
                },
                {
                    "title": "Annotations",
                    "steps": [
                        {
                            "title": "Annotations",
                            "content": "chapter6/annotations.mdx"
                        }
                
                    ]
                }, 
                {
                    "title": "Colors",
                    "steps": [
                        {
                            "title": "I see colors everywhere",
                            "content": "chapter6/colors.mdx"
                        }
                
                    ]
                }, 
                {
                    "title": "Dashboard Studio",
                    "steps": [
                        {
                            "title": "Dashboard Studio",
                            "content": "chapter6/studio.mdx"
                        },
                        {
                            "title": "Useful Links",
                            "content": "chapter6/useful_links6.mdx"
                        }
                    ]
                },
                {
                    "title": "DS Tutorial",
                    "steps": [
                        {
                            "title": "Dashboard Studio Tutorial",
                            "content": "chapter6/ds_tutorial.mdx"
                        },
                        {
                            "title": "Useful Links",
                            "content": "chapter6/useful_links6.mdx"
                        }
                    ]
                },
                
            ]
        },
        {
            "title": "0 - Setup",
            "id": "seven",
            "subtitle": "test",
            "icon": <Tool/>,
            "sections": [
                {
                    "title": "Setup",
                    "steps": [
                        {
                            "title": "Setup Task",
                            "content": "chapter7/setup_data.mdx"
                        }
                    ]
                },
                
                {
                    "title": "Follow Up Links",
                    "steps": [
                        {
                            "title": "Follow Up Links ",
                            "content": "chapter7/follow_up.mdx"
                        }
                       
                    ]
                },
                {
                    "title": "Credits",
                    "steps": [
                        {
                            "title": "Credits",
                            "content": "chapter7/credits.mdx"
                        }
                       
                    ]
                }
                
            ]
        }
       
    ]
}

export default labs
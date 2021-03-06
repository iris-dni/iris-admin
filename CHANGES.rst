=========================
Changes for Iris Admin UI
=========================

2019/05/27 1.0.0
================

 - new style dockerized app

2017/07/27 0.6.0
================

 - fix "Set Feedback" transition

2017/07/10 0.5.6
================

 - Cover Letter: remove "Einschreiben"

2017/02/07 0.5.5
================

 - Petitions finder: change wording to 'Brand'

2017/02/07 0.5.4
================

 - Petitions finder: add 'domain filter'
   DEPLOY:
    requires iris-service upgrade (introducing 'city.portal.id' filter)

2017/01/18 0.5.3
================

 - petition: show city sender

2017/01/10 0.5.2
================

 - fix letter template (owner name, partner)

2017/01/04 0.5.1
================

 - bugfix letter-appendix: get all supporters from api
 - Petition Finder: show owner info (if available)

2016/12/23 0.5.0
================

 - Petition Letter & Appendix: Fix minor issues; use 'public supporters API'
 - Add robots.txt: disallow all
 - authentication: add flag to allow public access
 - modify and style letter templates (appendix and cover)

2016/12/13 0.4.1
================

- petition editor: auto save city before triggering a transition
- petition editor: show all available user data

2016/11/29 0.4.0
================

- letter cover is public available

2016/11/21 0.3.0
================

- change wording of states (processing, processing.sendLetterRequested)
- added noLetterResponse filters and sidebar entry
- change page title dynamically (according to current page)
- display petition images

2016/11/07 0.2.0
================

- Petition Editor: fix check if city is assigned to petition when approving
- Petition Editor: generate letter cover and appendix
- set the required protocol for the swagger API
- Petition Editor: reset og
- Petition Editor: fix og url
- Petition Filter: wording of filter / sort
- Petition Filter: add creation date column
- Petition Editor: add creation date
- Petition Editor: use real data for mentions + urls
- Petition Finder: resolve city and owner
- Petition Finder: adapt to new relation shape
- Petition Editor: adapt to new relation shape
- Petition Editor: images box
- Petition Editor: mentions box
- Petition Editor: urls box
- Sidebar: change wording of petition state nav items
- Petition Finder: react to querystring changes
- Sidebar: predefined petition searches (pending, sendLetter, approveLetter)
- Petition Editor: user box
- Petition Editor: city communication box
- Petition Editor: added status information strings
- Petition Editor: state box
- Petition Finder: title fulltext search
- Petition Finder: filter by city
- Petition Finder: filter by state
- Petition Finder: sort by creation date, trending, amount of supporters


#!/bin/bash
BROWSERS=$1
SHADOW=$2

USAGE="usage: ./run-sauce-tests <browsers> <shadow-dom>
  examples:
    ./run-sauce-tests \"Windows 10/chrome@50, OS X 10.11/safari@10\"
    ./run-sauce-tests \"OS X 10.11/ipad@9.2\" shadow-dom"

if [ -z "$BROWSERS" ] ; then
  echo "<browsers> argument is missing."
  echo "$USAGE"
  exit 1
fi

# init wct.conf.json from the template
cp test/wct.conf.template wct.conf.json

# put browsers to wct.conf.json
sed -i -e "s|\${BROWSERS}|$(echo $BROWSERS | sed -r 's|,\s+|", "|g')|" wct.conf.json

# put extra scripts to wct.conf.json
if [ ! -z "$SHADOW" ] ; then
  sed -i -e "s|\${EXTRA_SCRIPTS}|test/enable-shadow-dom.js|" wct.conf.json
else
  sed -i -e "s|\${EXTRA_SCRIPTS}||" wct.conf.json
fi

# pretty output
printf "\n *** \033[0;33mRUNNING TESTS FOR $BROWSERS "
if [ ! -z "$SHADOW" ] ; then
  printf "\033[0;35m(DOM SHADOW)"
fi
printf "\033[0m\n\n";

# run Sauce tests
gulp test:remote

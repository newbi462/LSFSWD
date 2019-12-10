//active listen addEvents
lsof -iTCP -sTCP:LISTEN -n -P

//WATCHER LIMITS
/*

*/
//You can set a new limit temporary with:

$ sudo sysctl fs.inotify.max_user_watches=524288
$ sudo sysctl -p
//If you like to make your limit permanent, use:
$ echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf
$ sudo sysctl -p
You may also need to pay attention to the values of max_queued_events and max_user_instances if Listen keeps on complaining.
//USE THIS ONE:
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
//WILL NEED YOU ADMIN CODE/PASS

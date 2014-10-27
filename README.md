Openshift Idle Kill
===================

This project is to create a cron or forever(daemon) job to keep an Openshift
instance from idling.

## Usage

Clone repo `git clone https://github.com/zmetcalf/openshift_idle_kill.git`

Create sites.json file, a sample is included:
```
{
  "sites": {
    "your site": "https://yoursite_yourname.rhcloud.com/"
  }
}

```
Install forever to run `forever start cron_app.js` or create a crontab to run
app.js.

## How it works

This program simply sends a GET Request out to keep the instance alive.
I use this on a seperate server than their system, so I am not sure if
it would work on their own servers as a cron job.

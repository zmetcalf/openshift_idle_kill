Openshift Idle Kill
===================

This project is to create a cron or forever(daemon) job to keeep an Openshift
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

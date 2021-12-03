#%%
import os
import json

import configparser
import hashlib

curpath = os.path.dirname(os.path.realpath(__file__))
cfgpath = os.path.join(curpath, "config.ini")
local_cfg_path = os.path.join(curpath,'config.local.ini')
if os.path.exists(local_cfg_path): cfgpath = local_cfg_path

conf = configparser.ConfigParser()
conf.read(cfgpath, encoding="utf-8")

sections = conf.sections()
timer_id = input('请输入计时码:')

lc_id = conf.get('leancloud', 'appId')
lc_key = conf.get('leancloud', 'appKey')

#%%
import leancloud
leancloud.init(lc_id, lc_key)

import logging

# %%

query = leancloud.Query('TimerRule')
query.equal_to('timerId', int(timer_id))
tr = query.first()
# print(tr.timerId)
# %%
tr_name = tr.get('ruleName')
output = {
  'timerId': tr_name,
  'rules': tr.get('rule')
}
# %%
json_out = json.dumps(output,ensure_ascii=False)

js_out = f"""const offlineConfig = {{
  timerId: '{tr.get('ruleName')}',
  rules: '{tr.get('rule')}',
}};
export default offlineConfig;
"""

#%%
with open('../src/libs/offlineConfig.js', 'w', encoding='utf-8', newline='') as f:
  f.write(js_out)
# %%
ver = '1.21.901'
os.system("cd .. && npm run electron:build32")
#%%
import shutil
exe_path = os.path.abspath(f"../dist_electron/bamboo-drag Setup {ver}.exe")
this_path = os.path.abspath(f"./timers/32位·辩之竹计时器·{tr_name}.exe")
shutil.copy(exe_path, this_path)
# %%

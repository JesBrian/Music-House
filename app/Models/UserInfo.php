<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Notes: 用户其他信息
 * Class UserInfo
 * @package App\Models
 */
class UserInfo extends Model
{
    /**
     * 与模型关联的数据表
     * @var string
     */
    protected $table = 'mh_user_info';
    /**
     * 该模型是否被自动维护时间戳
     * @var bool
     */
    public $timestamps = false;
    /**
     * 该模型主键
     * @var string
     */
    protected $primaryKey = 'userId';

    /**
     * Notes: 创建新的用户信息
     * @param string $userId
     * @return bool
     */
    public static function addUserInfo(string $userId):bool
    {
        $userInfoModel = new self();
        $userInfoModel->userId = $userId;
        return $userInfoModel->save();
    }
}

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

    /**
     * Notes: 获取用户基本信息
     * @param $userId
     * @return array
     */
    public static function getUserBaseInfoById($userId)
    {
        return self::query()->select('sex', 'birth', 'address', 'description', 'mail')->where('userId', $userId)->first()->toArray();
    }

    /**
     * Notes: 更新用户基本信息
     * @param $infoData
     */
    public static function updateUserBaseInfo($infoData)
    {
        $userInfoModel = self::find($infoData['userId']);
        $userInfoModel->sex = $infoData['sex'];
        $userInfoModel->birth = $infoData['birth'];
        $userInfoModel->address = $infoData['address'];
        $userInfoModel->mail = $infoData['mail'];
        $userInfoModel->description = $infoData['description'];
        $userInfoModel->save();
    }
}
